import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
} from 'react-native'

const country = 'ES'

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      users: [],
    }
  }
  
  async componentWillMount() {
    console.log('componentWillMount即将卸载 组件 this.state, this.props ：', this.state, this.props, )
    const response = await fetch('https://randomuser.me/api/?results=5000')
    const data = await response.json()
    console.log('data ：', data);
    this.setState({
      loading: false,
      users: data.results.map(a => ({
        name: `${a.name.first} ${a.name.last}`,
        id: a.registered,
      })),
    })
  }

  render() {
    console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>
          {this.state.loading ? 'Fetching' : 'Fetched'} 5000 users
        </Text>

        {this.state.loading && <ActivityIndicator />}

        <TableView
          style={{ flex: 1 }}
          tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
        >
          <Section>
            {this.state.users.map(a => <Item key={a.id}>{a.name}</Item>)}
          </Section>
        </TableView>


        {/* App-bundled JSON with filter and selected value checkmarked */}
        <View style={{ flex: 1 }}>
          <TableView
            style={{ flex: 1 }}
            editing={this.props.navigation.state.params.editing}
          >
            <Section canMove canEdit>
              <Item canEdit={false}>Item 1</Item>
              <Item>Item 2</Item>
              <Item>Item 3</Item>
              <Item>Item 4</Item>
              <Item>Item 5</Item>
              <Item>Item 6</Item>
              <Item>Item 7</Item>
              <Item>Item 8</Item>
            </Section>
          </TableView>
        </View>

        {/* Built-in editing */}
          <View style={{ flex: 1 }}>
            <TableView
              style={{ flex: 1 }}
              editing={this.props.navigation.state.params.editing}
            >
              <Section canMove canEdit>
                <Item canEdit={false}>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
                <Item>Item 4</Item>
                <Item>Item 5</Item>
                <Item>Item 6</Item>
                <Item>Item 7</Item>
                <Item>Item 8</Item>
              </Section>
            </TableView>
          </View>

          {/* Pull to Refresh */}
      </View>
    )
  }
}


// Pull to Refresh
class PullToResfresh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      users: [],
      refreshing: false,
      amount: 10,
    }
  }
  async componentWillMount() {
    const users = await this.fetchUsers()
    console.log('users ：', users);
    console.log('componentWillMount 组件 this.state, this.props ：', this.state, this.props, )
    this.setState({
      loading: false,
      users,
    })
  }
  fetchUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=10')
    const data = await response.json()
    console.log('fetchUsers ：', response, data, );
    return data.results.map(a => ({
      name: `${a.name.first} ${a.name.last}`,
      id: a.registered,
    }))
  }
  
  fetchMore = () => {
    console.log('fetchMore ：', );
    this.setState({ refreshing: true }, async () => {
      const users = await this.fetchUsers()
      console.log('refreshing ：', users)
      this.setState({ users: [...users, ...this.state.users], refreshing: false, amount: this.state.amount + 10 })
    })
  }
  render() {
    console.log('PullToResfresh 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>
          {this.state.loading ? 'Fetching' : 'Fetched'} {this.state.amount} users
        </Text>
  
        {this.state.loading && <ActivityIndicator />}
  
        <TableView
          style={{ flex: 1 }}
          tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
          canRefresh
          refreshing={this.state.refreshing}
          onRefresh={this.fetchMore}
        >
          <Section>{this.state.users.map(a => <Item key={a.id}>{a.name}</Item>)}</Section>
        </TableView>
      </View>
    );
  }
}




export default PullToResfresh