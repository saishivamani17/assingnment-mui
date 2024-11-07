import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function CustomizedRating() {
  return (
 <div>
 <Box sx={{ '& > legend': { mt: 2 }, marginbottom:"100rem",position:"relative",top:"-10rem",left:"30rem" }}>
      <Typography component="legend">LIKES</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <Typography component="legend">GIVE 10 STAR DO NOTHING</Typography>
      <Rating name="customized-10" defaultValue={2} max={10} />
    </Box>
    


     <Box sx={{ '& > legend': { mt: 2 },position:"relative",top:"-29rem",left:"30rem" }}>
      <Typography component="legend">LIKES</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <Typography component="legend">GIVE 10 STAR DO NOTHING</Typography>
      <Rating name="customized-10" defaultValue={2} max={10} />
    </Box>


    <Box sx={{ '& > legend': { mt: 2 },position:"relative",top:"-48rem",left:"30rem" }}>
      <Typography component="legend">LIKES</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <Typography component="legend">GIVE 10 STAR DO NOTHING</Typography>
      <Rating name="customized-10" defaultValue={2} max={10} />
    </Box>



    </div>    

  );
}
