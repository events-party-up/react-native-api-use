import Ticker, { Tick } from "react-native-ticker";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
  },
  text: {
    fontSize: 40,
    color: "#FFF",
  },
});

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const currencies = ["$", "¥", "€"];

export default class App extends Component {
  state = {
    currency: "$",
    value: "123",
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currency: currencies[getRandom(0, 2)],
        value: getRandom(0, 1000) + "",
      });
    }, 500);
  }

  render() {
    console.log('App 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <Ticker textStyle={styles.text}>
          <Tick rotateItems={currencies}>{this.state.currency}</Tick>
          {this.state.value.split("").map((char, i) => {
            return (
              <Tick key={i} rotateItems={numbers}>
                {char}
              </Tick>
            );
          })}
          !!!
        </Ticker>
      </View>
    );
  }
}