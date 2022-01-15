import React from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/withSpinner/with-spinner.component";
import CollectionOverview from "../../components/collections-overview/collections-overview.componnt";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {updateCollections} from "../../redux/shop/shop.actions";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {

    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;
    componentDidMount() {
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections');
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
        collectionRef.get().then(snapshot => {
            const collectionsMap =  convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap)
            this.setState({loading: false})
        })

    }

    render() {
       const {match} = this.props;
       const {loading} = this.state
       return  (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={props => (<CollectionOverviewWithSpinner isLoading={loading} {...props}/>)}/>
                <Route path={`${match.path}/:collectionId`} render={props => (<CollectionPageWithSpinner isLoading={loading} {...props}/>)}/>
            </div>
        )
    }

}


const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})


export default connect(null, mapDispatchToProps)(ShopPage)