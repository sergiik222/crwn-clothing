import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching} from "../../redux/shop/shop.selectors";
import {compose} from 'redux'
import WithSpinner from "../withSpinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.componnt";


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer
