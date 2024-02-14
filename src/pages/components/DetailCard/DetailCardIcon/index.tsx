import { ElementType } from "react";
import { useTheme } from "styled-components";

import { IconInfo } from "./styles";

type DetailCardIcon = {
    icon: ElementType
    size?: string
    label?: string
}

export function DetailCardIcon({ icon: Icon, size, label }: DetailCardIcon) {
    const theme = useTheme();

    return (
        <IconInfo>
            <Icon
                size={size || "1.4rem"}
                color={theme.label}
            />

            {label && <span>{label}</span>}
        </IconInfo>
    );
}