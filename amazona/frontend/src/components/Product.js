import React from 'react'
import Rating from './Rating';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      backgroundColor: "#203040",
    },
    media: {
      height: "300px",
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function Product(props) {
    const {product} = props;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div key={product._id} className="card">
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            NEW
                        </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon className="text-white" style={{ fontSize: 30 }}/>
                    </IconButton>
                    }
                    title={product.name}
                    subheader={product.review}
                    className="text-white card-header-text"
                />
                <a href={`/product/${product._id}`}>
                    <CardMedia
                        className={classes.media}
                        image={product.image}
                        title={product.name}
                    />
                </a>
                <CardContent className="p-4">
                    <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                    <div className="price text-white pt-3 mx">
                        ${product.price}
                    </div>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon  className="text-white" style={{ fontSize: 20 }}/>
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon  className="text-white" style={{ fontSize: 20 }}/>
                    </IconButton>
                    <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                        <ExpandMoreIcon  className="text-white" style={{ fontSize: 25 }}/>
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph className="text-white font-size-1rem">
                        {product.description}
                    </Typography>
                </CardContent>
            </Collapse>
            </Card>
        </div>
    )
}
