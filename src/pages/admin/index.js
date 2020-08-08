import React, { Component } from 'react';
import { connect } from 'react-redux';
import GuideContent from '../../components/guide-content';
import './admin.sass';
import ManageUser from '../../components/mana_user';
import RequestUpgrade from '../../components/requestupgrade';

class Admin extends Component {
  render() {
    let compo = <div>đây là trang admin</div>;
    // console.log(this.props.dataAdmin)
    if (this.props.dataAdmin.dp_dt_user) {
      compo = <ManageUser />;
    }
    if (this.props.dataAdmin.dp_dt_request) {
      compo = <RequestUpgrade />;
    }
    return (
      <div className="pageAdmin">
        <div>
          <GuideContent />
        </div>
        <div className="container">
          {compo}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  dataAdmin: state.admin
});
export default connect(mapStateToProps)(Admin);
