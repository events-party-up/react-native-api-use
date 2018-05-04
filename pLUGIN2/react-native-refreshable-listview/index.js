import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ListViewm
} from 'react-native'
const RefreshableListView = require('react-native-refreshable-listview')
const ArticleStore = require('../stores/ArticleStore')
const StoreWatchMixin = require('./StoreWatchMixin')
const ArticleView = require('./ArticleView')

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}) // assumes immutable objects

export default class ArticlesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows(ArticleStore.all())
    }
  }
  getStoreWatches = () => {
    console.log('getStoreWatches ：', )
    this.watchStore(ArticleStore, () => {
      this.setState({dataSource: ds.cloneWithRows(ArticleStore.all())})
    })
  }
  reloadArticles = () => {
    // returns a Promise of reload completion
    // for a Promise-free version see ControlledRefreshableListView below
    return ArticleStore.reload()
  }
  renderArticle = (article) => {
    console.log('renderArticle  article ：', article);
    return <ArticleView article={article} />
  }
  render() {
    console.log('ArticlesScreen 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <RefreshableListView
        dataSource={this.state.dataSource}
        renderRow={this.renderArticle}
        loadData={this.reloadArticles}
        refreshDescription="Refreshing articles"
      />
    )
  }
}


const {ControlledRefreshableListView} = require('react-native-refreshable-listview')
const ArticleView = require('./ArticleView')
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}) // assumes immutable objects
export default class ResfreshDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows(this.props.articles)
    }
  }
  static propTypes = {
    // eg. props mapped from store state
    articles: React.PropTypes.array.isRequired,
    isRefreshingArticles: React.PropTypes.bool.isRequired,
    // eg. a bound action creator
    refreshArticles: React.PropTypes.func.isRequired,
  }
  componentWillReceiveProps(nextProps) {
    console.log(' componentWillReceiveProps组件获取变化 ：', nextProps, this.props, this.state,  )
    if (this.props.articles !== nextProps.articles) {
      this.setState({dataSource: ds.cloneWithRows(nextProps.articles)})
    }
  }
  renderArticle = (article) => {
    console.log('renderArticle  article ：', article)
    return <ArticleView article={article} />
  }
  
  render() {
    console.log('ResfreshDemo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <ControlledRefreshableListView
          dataSource={this.state.dataSource}
          renderRow={this.renderArticle}
          isRefreshing={this.props.isRefreshingArticles}
          onRefresh={this.props.refreshArticles}
          refreshDescription="Refreshing articles"
        />
        
        <RefreshableListView
          refreshingIndicatorComponent={
            <RefreshableListView.RefreshingIndicator stylesheet={indicatorStylesheet} />
          }
        />
        
      </View>
    );
  }
}
const indicatorStylesheet = StyleSheet.create({
  wrapper: {
    backgroundColor: 'red',
    height: 60,
    marginTop: 10,
  },
  content: {
    backgroundColor: 'blue',
    marginTop: 10,
    height: 60,
  },
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});