import React from 'react';
import {render} from 'react-dom';

import '../style/css/base-bts-1.2.0.css'
import '../style/css/module-2.2.6.css'
import '../style/css/lib-export-20190415_1139.css'
import '../style/css/process-20190422_1156.css'
import '../style/css/modal-functional-20190422_1156.css'

class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            promoted_object_type_list:[
                {promoted_object_type:'PROMOTED_OBJECT_TYPE_APP_ANDROID',name:'Android应用',des:'推广Android应用，增加应用的下载'},
                {promoted_object_type:'PROMOTED_OBJECT_TYPE_APP_IOS',name:'iOS应用',des:'推广iOS应用，增加应用的下载'},
                {promoted_object_type:'PROMOTED_OBJECT_TYPE_APP_ANDROID_MYAPP',name:'Android应用（应用宝推广）',des:'在应用宝平台，推广Android应用，增加应用的下载'},
                {promoted_object_type:'PROMOTED_OBJECT_TYPE_APP_ANDROID_UNION',name:'Android应用（联盟推广）',des:'在移动联盟流量上推广Android应用，增加应用的下载'},
                
            ],//推广目标列表
            promoted_object_type:'',//推广目标类型
            promoted_object_type_error:'',//推广目标类型错误
            daily_budget:'',//日限额
            daily_budget_error:'',//日限额错误
            speed_mode:'SPEED_MODE_STANDARD',//投放速度模式，默认值为标准投放
            channel_ad_id:'',//广告位id
            channel_ad_id_error:'',//广告位id错误
            design_id:'',//素材id
            design_id_error:'',//素材id错误
            campaign_name:'',//推广计划名称
            campaign_name_error:'',//推广计划名称错误
            campaign_name_length:0,//推广计划名称长度
            batch_num:'1',//批量创建数量
            campaign_id:'',//推广计划id
        }
    }

    handleChange(event) {
        // 读取输入的值
        const name=event.target.name;
        const value=event.target.value; 
        //   更新状态
        this.setState({
            [name]:value
        },
        ()=>{
            if( name === 'daily_budget'){
                if(value===''){
                    this.setState({
                        daily_budget_error:'不能为空'
                    })
                    return 
                }
                if(!/^[0-9]+.?[0-9]*/.test(value)){
                    this.setState({
                        daily_budget_error:'仅支持不低于50的整数'
                    })
                    return 
                }
                if(parseInt(value)<=50||parseInt(value)>=4000000){
                    this.setState({
                        daily_budget_error:'超出范围50-4000000'
                    })
                    return 
                }
                this.setState({
                    daily_budget_error:''
                })
            }
            if( name === 'channel_ad_id'){
                if(value===''){
                    this.setState({
                        channel_ad_id_error:'不能为空'
                    })
                    return
                }
                this.setState({
                    channel_ad_id_error:''
                })
            }
            if( name === 'design_id'){
                if(value===''){
                    this.setState({
                        design_id_error:'不能为空'
                    })
                    return
                }
                this.setState({
                    design_id_error:''
                })
            }
            
            if(name === 'campaign_name'){
                if(value===''){
                    this.setState({
                        campaign_name_error:'不能为空',
                        campaign_name_length:this.state.campaign_name.length
                    })
                    return 
                }
                this.setState({
                    campaign_name_error:'',
                    campaign_name_length:this.state.campaign_name.length
                })
            }
        })
    }

    render() {
        return(
            <div>
                <div className="ad-process noSidebar edit">
                    <div className="inprocess" style={{padding: '0 40px'}}>
                        <div className="path path-compaign" id="order_container_campaign">
                            <div className="inner">
                                <div className="tab-title">
                                    <h2>新建推广计划</h2>
                                </div>
                            </div>
                        </div>
                        {/* 新建推广计划 */}
                        <div className="plans plan-new">
                            {/* 推广目标 */}
                            <div className="lump js_sub_container" id="order_subcontainer_campaign_product_type">
                                <h3>推广目标</h3>
                                <div className={`tipblock error ${this.state.promoted_object_type_error?'':'none'}`}><i className="icon ico-tips-normal"><i></i></i>{this.state.promoted_object_type_error}</div>
                                <div className="disabled">
                                    <ul className="expand-targ">
                                        {
                                            this.state.promoted_object_type_list.map((item,index)=>{
                                                return (
                                                    <li className={this.state.promoted_object_type === item.promoted_object_type ?'active':''}  key={item.promoted_object_type} >
                                                        <div className="name"><i className="icon ico-web"><i></i><i className="choosed"></i></i>{item.name}</div><span className="des">{item.des}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            {/* 计划设置 */}
                            <div className="lump js_sub_container" id="order_subcontainer_campaign_setting">
                                <h3>计划设置</h3>
                                <div className="expand-setting">
                                    <div className="m-input-comp-group layout-justified js-url">
                                        <div className={`layout-col fire-hover m-input-comp layout-col active ${this.state.daily_budget_error?'error':''}`}>
                                            <div className="tit-wrap">
                                                <p className="name"><span>日限额{this.state.daily_budget_error}</span></p><span className="input-group-addon"></span></div>
                                            <div className="input-wrap">
                                                <div className="form-group"><input className="form-control" name="daily_budget" placeholder="此计划内所有广告的每日最高总花费" daily_budget="" onChange={this.handleChange.bind(this)} autocomplete="off"/></div>
                                            </div>
                                            <div className="bg-line"></div>
                                        </div>
                                        <div className="more-wrap layout-col">
                                            <ul className="layout-justified">
                                                <li className="choose-one-way blk-options">
                                                    <div className="inner"><label className="m-radiobox noborder"><input type="radio" className="radio" name="speed_mode" value="SPEED_MODE_STANDARD" checked={this.state.speed_mode === 'SPEED_MODE_STANDARD'} onChange={this.handleChange.bind(this)} /><span className="icobox"><span className="ico"></span></span><em>标准投放</em></label></div>
                                                </li>
                                                <li className="choose-one-way blk-options">
                                                    <div className="inner"><label className="m-radiobox noborder"><input type="radio" className="radio" name="speed_mode" value="SPEED_MODE_FAST" checked={this.state.speed_mode === 'SPEED_MODE_FAST'} onChange={this.handleChange.bind(this)} /><span className="icobox"><span className="ico"></span></span><em>加速投放</em></label></div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lump">
                                <div className="expand-setting">
                                    <h3></h3>
                                    <div className={`layout-col fire-hover  m-input-comp active ${this.state.channel_ad_id_error?'error':''}`}>
                                        <div className="tit-wrap">
                                            <p className="name"><span>广告位ID{this.state.channel_ad_id_error}</span></p>
                                        </div>
                                        <div className="input-wrap">
                                            <div className="form-group">
                                                <input className="form-control" placeholder="请输入广告位ID" name="channel_ad_id" channel_ad_id="" onChange={this.handleChange.bind(this)} autocomplete="off"/>
                                            </div>
                                        </div>
                                        <div className="bg-line"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="lump">
                                <div className="expand-setting">
                                    <h3></h3>
                                    <div className={`layout-col fire-hover  m-input-comp active ${this.state.design_id_error?'error':''}`}>
                                        <div className="tit-wrap">
                                            <p className="name"><span>素材ID{this.state.design_id_error}</span></p>
                                        </div>
                                        <div className="input-wrap">
                                            <div className="form-group">
                                                <input className="form-control" placeholder="请输入素材ID" name="design_id" design_id="" onChange={this.handleChange.bind(this)} autocomplete="off"/>
                                            </div>
                                        </div>
                                        <div className="bg-line"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="lump">
                                <div className="expand-setting">
                                    <h3></h3>
                                    <div className={`layout-col fire-hover  m-input-comp active ${this.state.campaign_name_error?'error':''}`} >
                                        <div className="tit-wrap">
                                            <p className="name"><span>推广计划名称{this.state.campaign_name_error}</span></p><span className="input-group-addon"><span><span className="">{this.state.campaign_name_length}</span>/40</span>
                                            </span>
                                        </div>
                                        <div className="input-wrap">
                                            <div className="form-group">
                                                <input className="form-control" placeholder="请输入推广计划名称" name="campaign_name" campaign_name="" onChange={this.handleChange.bind(this)} maxLength='40'autocomplete="off"/>
                                            </div>
                                        </div>
                                        <div className="bg-line"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-line path-btn-line"><button type="button" className={`btn btn-primary ${!this.state.isShowAdgroup?'':'none'}`}  disabled={this.state.disabled}>提交</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div role="dialog" className="spa-ui">
                    <div className="modal-backdrop fade in"></div>
                    <div id="spaui15663529972451" role="dialog" tabindex="-1" className="modal-md ad-process spaui_confirmmodal_spaui15663529972451 fade in modal" style={{display: 'block'}}>
                        <div className="modal-dialog" style={{marginLeft: '-300px', marginTop: '-164px', top: '50%', left: '50%', position: 'fixed'}}>
                            <div className="modal-content modal-header-simple directional-confirm" role="document">
                                <div className="modal-header">
                                    <button type="button" className="close">
                                        <span aria-hidden="true">×</span>
                                        <span className="sr-only">Close</span>
                                    </button>
                                    <h4 className="modal-title">确认提交</h4>
                                </div>
                                <div className="modal-body">
                                    <div className="infomations">
                                        <div className="tit">推广计划</div>
                                        <ul className="info">
                                            <li className="infolist">
                                                <span className="name">推广计划名称</span>
                                                <p className="fill">1-d2-1-190816140556</p>
                                            </li>
                                            <li className="infolist">
                                                <span className="name">推广目标</span>
                                                <p className="fill">Android应用</p>
                                            </li>
                                            <li className="infolist">
                                                <span className="name">日限额</span>
                                                <p className="fill">2,222元/天</p>
                                            </li>
                                            <li className="infolist">
                                                <span className="name">投放形式</span>
                                                <p className="fill">标准投放</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default">返回编辑</button>
                                    <button type="button" className="btn btn-primary">提交</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div role="dialog" className="spa-ui">
                    <div className="modal-backdrop fade in"></div>
                    <div id="spaui15663713922802" width="500px" role="dialog" tabindex="-1" className="modal-md ad-process spaui_confirmmodal_spaui15663713922802 fade in modal" style={{display: 'block'}}>
                        <div className="modal-dialog" style={{width: '500px', marginLeft: '-250px', marginTop: '-102px', top: '50%', left: '50%', position: 'fixed'}}>
                            <div className="modal-content" role="document">
                                <div className="directional-done modal-body">
                                    <div className="simple">
                                        <div className="summary">
                                            <i className="icon ico-success-36">
                                                <i></i>
                                            </i>
                                            计划提交成功！
                                        </div>
                                        <p className="more-info">您可随时在该计划下新建广告</p>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default">关闭</button>
                                    <button type="button" className="btn btn-primary">去新建广告</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

render(<Edit/>, document.getElementById('edit'));