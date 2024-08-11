import { useLockFn, useMemoizedFn, useReactive } from "ahooks";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { formatError } from "@/utils";
import { message } from "@/utils/notification";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, List, ListItem } from "@mui/material";
import {
  ClashCore,
  useClash,
  useNyanpasu,
  VergeConfig,
} from "@nyanpasu/interface";
import { BaseCard, ExpandMore } from "@nyanpasu/ui";
import { ClashCoreItem } from "./modules/clash-core";

export const SettingClashCore = () => {
  const { t } = useTranslation();

  const loading = useReactive({
    mask: false,
    restart: false,
    check: false,
  });

  const [expand, setExpand] = useState(false);

  const {
    nyanpasuConfig,
    setClashCore,
    getClashCore,
    restartSidecar,
    getLatestCore,
    updateCore,
  } = useNyanpasu({
    onLatestCoreError: (error) => {
      message(`Fetch latest core failed: ${formatError(error)}`, {
        type: "error",
        title: t("Error"),
      });
    },
  });

  const { getVersion, deleteConnections } = useClash();

  const version = useMemo(() => {
    const data = getVersion.data;

    return data?.premium
      ? `${data.version} Premium`
      : data?.meta
        ? `${data.version} Meta`
        : data?.version || "-";
  }, [getVersion.data]);

  const changeClashCore = useLockFn(async (core: ClashCore) => {
    try {
      loading.mask = true;
      try {
        await deleteConnections();
      } catch (e) {
        console.error(e);
      }

      await setClashCore(core);

      message(`Successfully switch to ${core}`, {
        type: "info",
        title: t("Success"),
      });
    } catch (e) {
      message(
        `Switching failed, you could see the details in the log. \nError: ${
          e instanceof Error ? e.message : String(e)
        }`,
        {
          type: "error",
          title: t("Error"),
        },
      );
    } finally {
      loading.mask = false;
    }
  });

  const handleRestart = useLockFn(async () => {
    try {
      loading.restart = true;

      await restartSidecar();

      message(t("Successfully restart core"), {
        type: "info",
        title: t("Success"),
      });
    } catch (e) {
      message("Restart failed, please check log.", {
        type: "error",
        title: t("Error"),
      });
    } finally {
      loading.restart = false;
    }
  });

  const handleCheckUpdates = useLockFn(async () => {
    try {
      loading.check = true;

      await getLatestCore.mutate();
    } catch (e) {
      message("Fetch failed, please check your internet connection.", {
        type: "error",
        title: t("Error"),
      });
    } finally {
      loading.check = false;
    }
  });

  const [coreUpdaterState, setCoreUpdaterState] = useState<{
    [key: string]: number;
  }>({});

  const handleUpdateCore = useLockFn(
    async (core: Required<VergeConfig>["clash_core"]) => {
      try {
        loading.mask = true;

        const updater_id = await updateCore(core);
        setCoreUpdaterState((state) => ({
          ...state,
          [core]: updater_id,
        }));
        // message(`Successfully update core ${core}`, {
        //   type: "info",
        //   title: t("Success"),
        // });
      } catch (e) {
        message(`Update failed.`, {
          type: "error",
          title: t("Error"),
        });
      } finally {
        loading.mask = false;
      }
    },
  );

  const mergeCores = useMemo(() => {
    return getClashCore.data?.map((item) => {
      const latest = getLatestCore.data?.find(
        (i) => i.core == item.core,
      )?.latest;

      return {
        ...item,
        latest,
      };
    });
  }, [getClashCore.data, getLatestCore.data]);

  const onUpdaterStateChanged = useMemoizedFn(
    (core: string, state: "success" | "error", msg?: string) => {
      if (state === "success") {
        message(`Successfully update core ${core}`, {
          type: "info",
          title: t("Success"),
        });
        getClashCore.mutate();
      } else {
        message(`Update failed. ${msg}`, {
          type: "error",
          title: t("Error"),
        });
      }
      setCoreUpdaterState((state) => {
        const newState = { ...state };
        delete newState[core];
        return newState;
      });
    },
  );

  return (
    <BaseCard
      label={t("Clash Core")}
      loading={loading.mask}
      labelChildren={<span>{version}</span>}
    >
      <List disablePadding>
        {mergeCores?.map((item, index) => {
          const show = expand || item.core == nyanpasuConfig?.clash_core;

          return (
            <motion.div
              key={index}
              initial={false}
              animate={show ? "open" : "closed"}
              variants={{
                open: {
                  height: "auto",
                  opacity: 1,
                  scale: 1,
                },
                closed: {
                  height: 0,
                  opacity: 0,
                  scale: 0.7,
                },
              }}
            >
              <ClashCoreItem
                data={item}
                selected={item.core == nyanpasuConfig?.clash_core}
                onClick={() => changeClashCore(item.core)}
                onUpdate={() => handleUpdateCore(item.core)}
                onUpdaterStateChanged={(state, msg) => {
                  onUpdaterStateChanged(item.core, state, msg);
                }}
                updaterId={coreUpdaterState[item.core]}
              />
            </motion.div>
          );
        })}

        <ListItem
          sx={{
            pl: 0,
            pr: 0,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box display="flex" gap={1}>
            <LoadingButton
              variant="outlined"
              loading={loading.restart}
              onClick={handleRestart}
            >
              {t("Restart")}
            </LoadingButton>

            <LoadingButton
              loading={loading.check || getLatestCore.isLoading}
              variant="contained"
              onClick={handleCheckUpdates}
            >
              {t("Check Updates")}
            </LoadingButton>
          </Box>

          <ExpandMore expand={expand} onClick={() => setExpand(!expand)} />
        </ListItem>
      </List>
    </BaseCard>
  );
};

export default SettingClashCore;
