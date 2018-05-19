import StarRating from 'react-native-star-rating';

class CustomStarExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 2.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <StarRating
        disabled={false}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        maxStars={7}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        fullStarColor={'red'}
      />
    );
  }
}

export default CustomStarExample