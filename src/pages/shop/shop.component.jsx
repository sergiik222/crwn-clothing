import React from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import CollectionsContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import {fetchCollectionsStartAsync} from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;
    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();


        /*fetch('https://firestore.googleapis.com/v1/projects/crwn-db-58610/databases/(default)/documents/collections')
            .then(
                response => response.json()
            )
            .then(
                collections => console.log(collections)
            )
*/
        /*collectionRef.onSnapshot(async snapshot => {
           const collectionsMap =  convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap)
            this.setState({loading: false})
        })*/


    }

    render() {
       const {match} = this.props;
       return  (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionsContainer}/>
            </div>
        )
    }

}



const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})


export default connect(null, mapDispatchToProps)(ShopPage)