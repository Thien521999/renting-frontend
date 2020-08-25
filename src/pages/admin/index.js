import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import GuideContent from '../../components/guide-content';
import './admin.sass';
import ManageUser from '../../components/mana_user';
import RequestUpgrade from '../../components/requestupgrade';
import getAllUser from './services/getalluser';
import getRequest from './services/getRequestUpgrate';

class Admin extends Component {
  componentWillMount=() => {
    this.props.dispatch(getAllUser());
    this.props.dispatch(getRequest());
  }

  render() {
    let compo;
    // console.log(this.props.dataAdmin)
    if (this.props.dataAdmin.dp_dt_user) {
      compo = <ManageUser data={this.props.dataAdmin.datausers} />;
    }
    if (this.props.dataAdmin.dp_dt_request) {
      compo = <RequestUpgrade data={this.props.dataAdmin.userupgrade} />;
    }

    if (this.props.checkadmin !== 2) {
      compo = <Redirect push to="/notfound" />;
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
  dataAdmin: state.admin,
  checkadmin: state.user.data.role
});
export default connect(mapStateToProps)(Admin);
