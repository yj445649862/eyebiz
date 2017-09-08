import React from 'react'
import { Collapse } from 'antd'
const Panel = Collapse.Panel;
import EyeCommonHistoryHeader from 'components/common/history/EyeCommonHistoryHeader'
import EyeCommonHistoryAdvise from 'components/common/history/EyeCommonHistoryAdvise'
import EyeCommonHistoryBilling from 'components/common/history/EyeCommonHistoryBilling'
import EyeCommonHistoryCheck from 'components/common/history/EyeCommonHistoryCheck'
import EyeCommonHistoryDiagnosis from 'components/common/history/EyeCommonHistoryDiagnosis'
import EyeCommonHistoryFlup from 'components/common/history/EyeCommonHistoryFlup'
import EyeCommonHistoryInquiry from 'components/common/history/EyeCommonHistoryInquiry'
import EyeCommonHistoryPrescription from 'components/common/history/EyeCommonHistoryPrescription'
import EyeCommonHistoryReferral from 'components/common/history/EyeCommonHistoryReferral'
import 'assets/common_history.css'
export default class EyeCommonHistory extends React.Component{
    constructor(props){
        super(props)
        this.collapseChangeHandler = this.collapseChangeHandler.bind(this)
        this.state={
            activeKeys:[]
        }
    }
    collapseChangeHandler(activeKeys){
          this.setState({
              activeKeys
          })
    }
    render(){
        let keys = this.state.activeKeys ;
        return (
            <div className="eye-common-height">
                <EyeCommonHistoryHeader></EyeCommonHistoryHeader>
                <Collapse className="ant-collapse" style={{overflowY:"auto"}} onChange={this.collapseChangeHandler}>
                    <Panel header="初检" key="check" className={_.indexOf(keys,'check')==-1?"":"active"} >
                        <EyeCommonHistoryCheck/>
                    </Panel>
                    <Panel header="问诊" key="inquery" className={_.indexOf(keys,'inquery')==-1?"":"active"}>
                        <EyeCommonHistoryInquiry/>
                    </Panel>
                    <Panel header="开单" key="billing" className={_.indexOf(keys,'billing')==-1?"":"active"}>
                        <EyeCommonHistoryBilling/>
                    </Panel>
                    <Panel header="处方" key="prescription" className={_.indexOf(keys,'prescription')==-1?"":"active"}>
                        <EyeCommonHistoryPrescription/>
                    </Panel>
                    <Panel header="诊断" key="diagnosis" className={_.indexOf(keys,'diagnosis')==-1?"":"active"}>
                        <EyeCommonHistoryDiagnosis/>
                    </Panel>
                    <Panel header="随访" key="flup" className={_.indexOf(keys,'flup')==-1?"":"active"}>
                        <EyeCommonHistoryFlup/>
                    </Panel>
                    <Panel header="转诊" key="referral" className={_.indexOf(keys,'referral')==-1?"":"active"}>
                        <EyeCommonHistoryReferral/>
                    </Panel>
                    <Panel header="建议" key="advise" className={_.indexOf(keys,'advise')==-1?"":"active"}>
                        <EyeCommonHistoryAdvise/>
                    </Panel>
                </Collapse>
            </div>
        )
    }
}