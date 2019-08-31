import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.personName = props.personName;
        this.desc = props.desc;
        this.img = props.img;
        this.date = props.date;
    }
    render() {
        return (
            <Card className={"personCard"}>
                <CardHeader
                    avatar={
                        <Avatar aria-label={this.name} className={"avatar"} component={"div"}>
                            {this.personName[0]}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={this.personName}
                    subheader={this.date}
                />
                <CardMedia
                    className={"cardMedia"}
                    title= {"picture of " + this.personName}
                    component={"div"}>
                    <img src={this.img} alt={"Bilde av " + this.personName}/>
                </CardMedia>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.desc}
                    </Typography>
                </CardContent>
                <CardActions className={"cardActions"} disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>

        )
    }
}

export default PersonCard;