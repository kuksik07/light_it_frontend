import React from 'react'
import { ASSETS_URL } from '../../services/api'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

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
}

const CatalogItem = ({ classes, product }) =>
  <Card className={classes.card}>
    <CardMedia
      className={classes.media}
      image={ASSETS_URL + product.img}
      title={product.title}
    />
    <CardContent>
      <Typography gutterBottom variant="headline" component="h2">
        {product.title}
      </Typography>
      <Typography color="textSecondary">
        {product.text}
      </Typography>
    </CardContent>
    <CardActions>
      <Button color="primary" component={Link} to={`/products/${product.id}`}>
        Learn More
      </Button>
    </CardActions>
  </Card>

CatalogItem.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
}

export default withStyles(styles)(CatalogItem)
