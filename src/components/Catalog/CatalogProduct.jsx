import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

const styles = {
    card: {
        width: 250,
        margin: '15px',
        float: 'left'
    },
    media: {
        backgroundSize: 'contain',
        height: '200px',
        marginTop: '15px'
    },
};

class CatalogProduct extends Component{
    render () {
        const { classes, imagePath, title, id } = this.props;
        return (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={imagePath}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        { title }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="primary" component={Link} to={`/products/${id}`}>
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

CatalogProduct.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CatalogProduct)