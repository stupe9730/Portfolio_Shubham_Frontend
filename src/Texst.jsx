import * as React from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
import Typography from '@mui/joy/Typography';
import { useCountUp } from 'use-count-up';

export const LinearProgressCountUp = () => {
    const { value } = useCountUp({
        isCounting: true,
        duration: 5,
        easing: 'easeOutCubic',
        start: 0,
        end: 90,
        onComplete: () => ({
            shouldRepeat: true,
            delay: 7,
        }),
    });

    return <>
        <Typography
            level="body-xs"
            fontWeight="xl"
            textColor="white"
            marginY={1}
            sx={{ mixBlendMode: 'difference' }}
        >
            HTML {` ${Math.round(Number(value))}%`}
        </Typography>
        <LinearProgress
            determinate
            variant="solid"
            // color="warning"
            style={{ backgroundColor: "#FFDFB7", color: "rgba(255,108,0,1 )" }}
            size="sm"
            thickness={0}
            value={Number(value)}
            sx={{
                '--LinearProgress-radius': '20px',
                '--LinearProgress-thickness': '10px',
            }
            }
        >
        </LinearProgress >
    </>
}
export const CssProgress = () => {
    const { value } = useCountUp({
        isCounting: true,
        duration: 5,
        easing: 'easeOutCubic',
        start: 0,
        end: 85,
        onComplete: () => ({
            shouldRepeat: true,
            delay: 7,
        }),
    });

    return <>
        <Typography
            level="body-xs"
            fontWeight="xl"
            textColor="white"
            marginTop={1.7}
            marginBottom={1}
            sx={{ mixBlendMode: 'difference' }}
        >
            CSS {` ${Math.round(Number(value))}%`}
        </Typography>
        <LinearProgress
            determinate
            variant="solid"
            // color="warning"
            style={{ backgroundColor: "#FFDFB7", color: "rgba(255,108,0,1 )" }}
            size="sm"
            thickness={0}
            value={Number(value)}
            sx={{
                '--LinearProgress-radius': '20px',
                '--LinearProgress-thickness': '10px',
            }
            }
        >
        </LinearProgress >
    </>
}
export const JsProgress = () => {
    const { value } = useCountUp({
        isCounting: true,
        duration: 5,
        easing: 'easeOutCubic',
        start: 0,
        end: 75,
        onComplete: () => ({
            shouldRepeat: true,
            delay: 7,
        }),
    });

    return <>
        <Typography
            level="body-xs"
            fontWeight="xl"
            textColor="white"
            marginTop={1.7}
            marginBottom={1}
            sx={{ mixBlendMode: 'difference' }}
        >
            JavaScript {` ${Math.round(Number(value))}%`}
        </Typography>
        <LinearProgress
            determinate
            variant="solid"
            style={{ backgroundColor: "#FFDFB7", color: "rgba(255,108,0,1 )" }}
            size="sm"
            thickness={0}
            value={Number(value)}
            sx={{
                '--LinearProgress-radius': '20px',
                '--LinearProgress-thickness': '10px',
            }
            }
        >
        </LinearProgress >
    </>
}