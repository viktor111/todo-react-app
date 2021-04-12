import { Button, useColorMode, IconButton, Tooltip } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function ThemeChange() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip label="Change color mode" fontSize="md">
      <IconButton
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        isRound="true"
        size="sm"
        onClick={toggleColorMode}
      />
    </Tooltip>
  );
}

export default ThemeChange;
