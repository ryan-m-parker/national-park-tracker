import { Box, MobileStepper, CardMedia, Button, useTheme } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";

const ImageCarousel = ({ selectedPark }) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const { images = {} } = selectedPark;
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
    return (
        <Box sx={{ width: '100%' }}>
            <CardMedia component="img" width={800} height={400} image={images[activeStep].url} />
            <MobileStepper
                steps={maxSteps}
                activeStep={activeStep}
                position="static"
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <ArrowBackIos />
                        ) : (
                            <ArrowForwardIos />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <ArrowForwardIos />
                        ) : (
                            <ArrowBackIos />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}

export default ImageCarousel;