import React from 'react';
import {render} from 'react-dom';
import axios from 'axios'

import '../style/css/spaui.css'
import '../style/css/cm-20190729_1173.css'


class Admanage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isShowActionMenu:false,//是否显示操作菜单
            menuLeft:0,
            menuTop:0,
            isShowModelCampaignName:false,//是否显示修改推广计划名称弹窗
            modelCampaignNameLeft:0,
            modelCampaignNameTop:0,
            campaign_name:'1-d2-1-190816140556',
            isShowModelDailyBudget:false,//是否显示修改日限额弹窗
            modelDailyBudgetLeft:0,
            modelDailyBudgetTop:0,
            daily_budget:'1111',
        }
        
    }
    
    handleInputChange(event) {
        // 读取输入的值
        const name=event.target.name;
        const value=event.target.value; 
        //   更新状态
        this.setState({
            [name]:value
        })
    }

    showActionMenu(event){
        this.setState({
            isShowActionMenu:true,
            menuLeft:event.clientX+13,
            menuTop:event.clientY-20,
        })
        console.log(event.offset)
        console.log(event.clientX)
        console.log(event.clientY)
    }

    showModelCampaignName(event){
        this.setState({
            isShowModelCampaignName:true,
            modelCampaignNameLeft:event.clientX+13,
            modelCampaignNameTop:event.clientY-20,
        })
    }

    showModelDailyBudget(event){
        this.setState({
            isShowModelDailyBudget:true,
            modelDailyBudgetLeft:event.clientX+13,
            modelDailyBudgetTop:event.clientY-20,
        })
    }
    //确定
    handleOk(model_type){
        if(model_type==='model_campaign_name'){
            this.setState({
                isShowModelCampaignName:false
            });
            return
        }
        if(model_type==='model_daily_budget'){
            this.setState({
                isShowModelDailyBudget:false,
            })
            return
        }
    };
    //取消
    handleCancel(model_type){
        if(model_type==='model_campaign_name'){
            this.setState({
                isShowModelCampaignName:false
            });
            return
        }
        if(model_type==='model_daily_budget'){
            this.setState({
                isShowModelDailyBudget:false,
            })
            return
        }
    };
    render() {
        return(
            <div>
                <div id="content">
                    <div className="sec-breadcrumb" id="breadcrumb">
                        <div className="with-addons spaui-breadcrumb breadcrumb">
                            <ol role="navigation" className="breadcrumbs ">
                                <li>
                                    <a role="button" href="javascript:;">
                                        <span>广告管理</span>
                                    </a>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="sec-tabs">
                        <div className="datalist-tabs spaui-tabs spaui-component">
                            <div className="spaui-tabs-head">
                                <ul className="with-indicator spaui-tabs-nav">
                                    <li className="active">
                                        <a data-name="campaign" data-hottag="Click.Function.admanage.campaign.tab" href="javascript:;">推广计划</a>
                                    </li>
                                    <li className="">
                                        <a data-name="adgroup" data-hottag="Click.Function.admanage.adgroup.tab" href="javascript:;">广告</a>
                                    </li>
                                    <li className="">
                                        <a data-name="adcreative" data-hottag="Click.Function.admanage.adcreative.tab" href="javascript:;"><span>广告创意</span></a>
                                    </li>
                                    <li className="spaui-tabs-indicator" style={{visibility: 'visible', margin: '0px',left: '41.5px'}}></li>
                                </ul>
                            </div>
                            <div className="spaui-tabs-body">
                                <div className="spaui-tabs-body-inner">
                                    <div className="datalist">
                                        <div className="toolbars" style={{top: '50px'}}>
                                            <div className="toolbar table-toolbar has-right-toolbar">
                                                <a data-hottag="Click.Function.admanage.campaign.create" className="spaui-button spaui-button-primary spaui-component" style={{color:'#fff'}} href="javascript:;" target="_blank">
                                                    <i className="icon icon-plus"></i>新建推广计划
                                                </a>
                                                <div className="toolbar-right">
                                                    <div className="toolbar-right-inner">
                                                        <div data-spaui="{&quot;name&quot;:&quot;spaui-select&quot;,&quot;version&quot;:&quot;0.3.10&quot;}" className="spaui-autocomplete has-icon has-clear spaui-component spaui-select spaui-component">
                                                            <div className="selection-container selection-container-single with-tips">
                                                                <div className="spaui-autocomplete-head">
                                                                    <i className="spaui-icon-viewer spaui-icon spaui-component" data-spaui="{&quot;name&quot;:&quot;spaui-icon&quot;,&quot;version&quot;:&quot;0.1.24&quot;}"></i>
                                                                    <input className="spaui-input" name="" placeholder="请输入计划名称/ID" value=""/>
                                                                    <span className="more-details spaui-autocomplete-more-details"></span>
                                                                </div>
                                                                <div className="selection-drop">
                                                                    <div className="selection-tips">没有更多内容</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="toolbar filter-toolbar datalist-filter-toolbar">
                                                <div className="toolbar-left">
                                                    <div className="toolbar-left-inner">
                                                        <i className="toolbar-icon icon icon-filter"></i>
                                                        <ul className="spaui-labels clearfix mini filter-panel-meta spaui-component" data-spaui="{&quot;name&quot;:&quot;spaui-labels&quot;,&quot;version&quot;:&quot;0.1.21&quot;}">
                                                            <li className="">
                                                                <span id="statusMetaItem" className="meta-item">
                                                                    <span className="meta-key">状态：</span>
                                                                    <span className="meta-val">所有未删除</span>
                                                                </span>
                                                                <i className="icon del"><i></i></i>
                                                            </li>
                                                            <li className="spaui-labels-clear">
                                                                <a href="javascript:;">清空</a>
                                                            </li>
                                                            <li className="spaui-labels-action">
                                                                <div className="popmenu" role="combobox">
                                                                    <button className="button-filter-add spaui-button spaui-button-link spaui-component" data-spaui="{&quot;name&quot;:&quot;spaui-button&quot;,&quot;version&quot;:&quot;0.1.34&quot;}" type="button">
                                                                        <i className="spaui-icon icon-plus"></i>添加筛选项
                                                                    </button>
                                                                    <div className="with-checkmark spaui-dropmenu spaui-component" data-spaui="{&quot;name&quot;:&quot;spaui-dropmenu&quot;,&quot;version&quot;:&quot;0.1.15&quot;}" title="">
                                                                        <ul className="spaui-submenu">
                                                                            <li className="spaui-menuitem">
                                                                                <a className=""><span className="spaui-menu-text" title="过滤无数据">过滤无数据</span></a>
                                                                            </li>
                                                                            <li className="spaui-menuitem selected">
                                                                                <a className=""><i className="spaui-menu-icon spaui-menu-icon-checkmark"></i><span className="spaui-menu-text" title="状态">状态</span></a>
                                                                            </li>
                                                                            <li className="spaui-menuitem">
                                                                                <a className=""><span className="spaui-menu-text" title="推广目标">推广目标</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="toolbar-right">
                                                    <div className="toolbar-right-inner">
                                                        <button className="borderless button-toolbar-close spaui-button spaui-button-link spaui-component" data-spaui="{&quot;name&quot;:&quot;spaui-button&quot;,&quot;version&quot;:&quot;0.1.34&quot;}" type="button">
                                                            <i className="icon icon-plus icon-close"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="a-table spaui-table spaui-table-wraper table-wraper spaui-table-cssfixedthead spaui-table-adjust-width spaui-component spaui-table-wraper-scroll" style={{paddingTop:'0px'}}>
                                            <div className="spaui-table-thead-wraper" style={{width: '100%' ,position: 'static', top: '157px'}}>
                                                <div className="spaui-table-thead" style={{width: '100%', left: '0px', position: 'relative'}}>
                                                    <table className="table table-striped table-hover">
                                                        <colgroup>
                                                            <col data-min-width="66" width="66px" data-width="66px" data-customstyle=""/>
                                                            <col data-min-width="30" width="30px" data-width="30px" data-customstyle=""/>
                                                            <col data-min-width="100" data-maxWidth="300" width="200px" data-width="200px" data-customstyle=""/>
                                                            <col data-min-width="100" width="180px" data-width="180px" data-customstyle=""/>
                                                            <col data-min-width="100" width="100px" data-width="100px" data-customstyle=""/>
                                                            <col data-min-width="100" width="100px" data-width="100px" data-customstyle=""/>
                                                            <col data-min-width="100" width="100px" data-width="100px" data-customstyle=""/>
                                                            <col data-min-width="100" width="100px" data-width="100px" data-customstyle=""/>
                                                            <col data-min-width="100" width="100px" data-width="100px" data-customstyle=""/>
                                                            <col data-min-width="100" width="100px" data-width="100px" data-customstyle=""/>
                                                            <col data-min-width="100" width="100px" data-width="100px" data-customstyle=""/>
                                                            <col data-min-width="100" width="100px" data-width="100px" data-customstyle=""/>
                                                        </colgroup>
                                                        <thead>
                                                            <tr className="spaui-table-thead-tr spaui-table-thead-column-tr ">
                                                                <th className="col-checkbox spaui-table-td-sort spaui-component" colspan="1" rowspan="1" data-name="" width="66" style={{textAlign: 'left' ,left: '0px',minWidth: '66px', maxWidth: '66px'}}>
                                                                    <div className="spaui-table-td-inner">
                                                                        <label className="spaui-table-optional-input spaui-checkbox ">
                                                                            <input type="checkbox" className="check" indeterminate="false" value="all"/>
                                                                            <span className="ico"></span>
                                                                        </label>
                                                                        <span className="spaui-table-fixed-td-border"></span>
                                                                    </div>
                                                                </th>
                                                                <th className="col-switch spaui-component" colspan="1" rowspan="1" data-name="switch" width="30" style={{textAlign: 'left', left: '0px', minWidth: '30px', maxWidth: '30px'}}>
                                                                    <div className="spaui-table-td-inner">
                                                                        <span></span><span className="spaui-table-fixed-td-border"></span>
                                                                    </div>
                                                                </th>
                                                                <th className="col-campaignname spaui-component" data-adjustminwidth="0" colspan="1" rowspan="1" data-name="campaignname" width="200" style={{textAlign: 'left', left: '0px', minWidth: '200px', maxwidth: '200px'}}>
                                                                    <div className="spaui-table-td-inner">
                                                                        <span>推广计划名称</span><span className="spaui-table-fixed-td-border"></span>
                                                                    </div>
                                                                    <span className="spaui-table-adjust-width-span" data-adjustwidth="1"></span>
                                                                </th>
                                                                <th className="col-status spaui-component"  data-adjustminwidth="0" colspan="1" rowspan="1" data-name="status" width="180" style={{textAlign: 'left', minWidth: '180px', maxWidth: '180px'}}>
                                                                    <div className="spaui-table-td-inner">
                                                                        <span>状态</span>
                                                                    </div>
                                                                    <span className="spaui-table-adjust-width-span" data-adjustwidth="1"></span>
                                                                </th>
                                                                <th className="col-action spaui-component"  data-adjustminwidth="100" colspan="1" rowspan="1" data-name="operation" width="100" style={{textAlign: 'left',minWidth: '100px', maxWidth: '100px'}}>
                                                                    <div className="spaui-table-td-inner">
                                                                        <span>操作</span>
                                                                    </div>
                                                                    <span className="spaui-table-adjust-width-span" data-adjustwidth="1"></span>
                                                                </th>
                                                                <th className="col-product_type_name spaui-component"  data-adjustminwidth="0" colspan="1" rowspan="1" data-name="product_type_name" width="100" style={{textAlign: 'left', minWidth: '100px', maxWwidth: '100px'}}>
                                                                    <div className="spaui-table-td-inner">
                                                                        <span>推广目标</span>
                                                                    </div>
                                                                    <span className="spaui-table-adjust-width-span" data-adjustwidth="1"></span>
                                                                </th>
                                                                <th className="col-addon with-popover spaui-component"  data-adjustminwidth="0" colspan="1" rowspan="1" data-name="daybudget" width="100" style={{textAlign: 'right', minWidth: '100px', maxWidth: '100px'}}>
                                                                    <div className="spaui-table-td-inner">
                                                                        <span name="daybudget">日限额</span>
                                                                    </div>
                                                                    <span className="spaui-table-adjust-width-span" data-adjustwidth="1"></span>
                                                                </th>
                                                                <th className="col-view_count with-popover with-sort spaui-table-td-sortable spaui-component"  data-adjustminwidth="0" colspan="1" rowspan="1" data-name="view_count" width="100" style={{textAlign: 'right', minWidth: '100px', maxWidth: '100px'}}>
                                                                    <div className="spaui-table-td-inner">
                                                                        <a href="javascript:;">
                                                                            <span name="view_count">曝光量</span>
                                                                        </a>
                                                                    </div>
                                                                    <span className="spaui-table-adjust-width-span" data-adjustwidth="1"></span>
                                                                </th>
                                                                <th className="col-valid_click_count with-popover with-sort spaui-table-td-sortable spaui-component"  data-adjustminwidth="0" colspan="1" rowspan="1" data-name="valid_click_count" width="100" style={{textAlign: 'right', minWidth: '100px', maxWidth: '100px'}}>
                                                                    <div className="spaui-table-td-inner">
                                                                        <a href="javascript:;">
                                                                            <span name="valid_click_count">点击量</span>
                                                                        </a>
                                                                    </div>
                                                                    <span className="spaui-table-adjust-width-span" data-adjustwidth="1"></span>
                                                                </th>
                                                                <th className="col-ctr with-popover with-sort spaui-table-td-sortable spaui-component"  data-adjustminwidth="0" colspan="1" rowspan="1" data-name="ctr" width="100" style={{textAlign: 'right', minWidth: '100px', maxWidth: '100px'}}>
                                                                    <div className="spaui-table-td-inner">
                                                                        <a href="javascript:;"><span name="ctr">点击率</span></a>
                                                                    </div>
                                                                    <span className="spaui-table-adjust-width-span" data-adjustwidth="1"></span>
                                                                </th>
                                                                <th className="col-cpc with-popover with-sort spaui-table-td-sortable spaui-component"  data-adjustminwidth="0" colspan="1" rowspan="1" data-name="cpc" width="100" style={{textAlign: 'right', minWidth: '100px', maxWidth: '100px'}}>
                                                                    <div className="spaui-table-td-inner">
                                                                        <a href="javascript:;">
                                                                            <span name="cpc">点击均价</span>
                                                                        </a>
                                                                    </div>
                                                                    <span className="spaui-table-adjust-width-span" data-adjustwidth="1"></span>
                                                                </th>
                                                                <th className="col-cost with-popover with-sort spaui-table-td-sortable spaui-component"  colspan="1" rowspan="1" data-name="cost" width="100" style={{textAlign: 'right', minWidth: '100px', maxWidth: '100px'}}>
                                                                    <div className="spaui-table-td-inner"><a href="javascript:;">
                                                                        <span name="cost">花费</span></a>
                                                                    </div>
                                                                </th>
                                                            </tr>
                                                            <tr className="spaui-table-thead-tr  " style={{display: 'none'}}></tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="spaui-table-tbody-wraper">
                                                <div className="spaui-table-tbody" style={{width: '100%'}}>
                                                    <table className="table table-striped table-hover">
                                                        <colgroup>
                                                            <col data-min-width="66" width="66px" data-width="66px" data-customstyle="" />
                                                            <col data-min-width="30" width="30px" data-width="30px" data-customstyle="" />
                                                            <col data-min-width="100" data-maxWidth="300" width="200px" data-width="200px" data-customstyle="" />
                                                            <col data-min-width="100" width="180px" data-width="180px" data-customstyle="" />
                                                            <col data-min-width="100" width="100px" data-width="100px" data-customstyle="" />
                                                            <col data-min-width="100" width="100px" data-width="100px" data-customstyle="" />
                                                            <col data-min-width="100" width="100px" data-width="100px" data-customstyle="" />
                                                            <col data-min-width="100" width="100px" data-width="100px" data-customstyle="" />
                                                            <col data-min-width="100" width="100px" data-width="100px" data-customstyle="" />
                                                            <col data-min-width="100" width="100px" data-width="100px" data-customstyle="" />
                                                            <col data-min-width="100" width="100px" data-width="100px" data-customstyle="" />
                                                            <col data-min-width="100" width="100px" data-width="100px" data-customstyle="" />
                                                        </colgroup>
                                                        <tbody>
                                                            <tr className="spaui-table-tr-data" data-index="0">
                                                                <td rowspan="1" colspan="1" className="col-checkbox" style={{textAlign: 'left',left: '0px', minWidth: '66px', maxWidth: '66px'}}>
                                                                    <div className="spaui-table-td-inner">
                                                                        <label className="spaui-checkbox">
                                                                            <input type="checkbox" className="check" name="" value="59234414"/>
                                                                            <span className="ico"></span>
                                                                        </label>
                                                                        <span className="spaui-table-fixed-td-border"></span>
                                                                    </div>
                                                                </td>
                                                                <td rowspan="1" colspan="1" className="col-switch" style={{textAlign: 'left',left: '0px', minWidth: '30px', maxWidth: '30px'}}>
                                                                    <div className="spaui-table-td-inner">
                                                                        <label className="spaui-switch spaui-component">
                                                                            <input type="checkbox" className="spaui-switch-input"/>
                                                                            <span className="spaui-switch-helper"></span>
                                                                        </label>
                                                                        <span className="spaui-table-fixed-td-border"></span>
                                                                    </div>
                                                                </td>
                                                                <td rowspan="1" colspan="1" className="col-campaignname" style={{textAlign: 'left',left: '0px', minWidth: '200px', maxWidth: '200px'}}>
                                                                    <div className="spaui-table-td-inner">
                                                                        <span className="editable">
                                                                            <a className="data-name-val" href="/atlas/10817928/admanage/adgroup?campaignid=59234414">1-d1--190812172159</a>
                                                                            <a href="javascript:;" data-hottag="admanage.campaign.table.name" className="editable-icon" aria-label="编辑" onClick={this.showModelCampaignName.bind(this)}>
                                                                                <i className="icon icon-pen"></i>
                                                                            </a>
                                                                        </span>
                                                                        <span className="spaui-table-fixed-td-border"></span>
                                                                    </div>
                                                                </td>
                                                                <td rowspan="1" colspan="1" className="col-status" style={{textAlign: 'left',minWidth: '180px', maxWidth: '180px',}}>
                                                                    <div className="spaui-table-td-inner">暂停中</div>
                                                                </td>
                                                                <td rowspan="1" colspan="1" className="col-action" style={{textAlign: 'left',minWidth: '100px', maxWidth: '100px'}}>
                                                                    <div className="spaui-table-td-inner">
                                                                        <div className="a-table-action">
                                                                            <a role="button" href="//e.qq.com/atlas/10817928/campaign/edit?id=59234414" target="_blank" data-hottag="Click.Function.admanage.campaign.action.edit">编辑</a>
                                                                            <a role="button" data-hottag="Click.Function.admanage.campaign.action.dot" className="action-icon " href="javascript:;" onClick={this.showActionMenu.bind(this)}>
                                                                                <i className="icon icon-action" ></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td rowspan="1" colspan="1" className="col-product_type_name" style={{textAlign: 'left',minWidth: '100px', maxWidth: '100px'}}>
                                                                    <div className="spaui-table-td-inner">
                                                                        <a href="//e.qq.com/atlas/10817928/report/producttype?ptype=12&amp;pname=Android%E5%BA%94%E7%94%A8">Android应用</a>
                                                                    </div>
                                                                </td>
                                                                <td rowspan="1" colspan="1" className="col-addon with-popover" style={{textAlign: 'right', minWidth: '100px', maxWidth: '100px'}}>
                                                                    <div className="spaui-table-td-inner">
                                                                        <span className="editable">
                                                                            <span>1,111</span>
                                                                            <a href="javascript:;" data-hottag="admanage.campaign.table.daybudget" className="editable-icon" aria-label="编辑" onClick={this.showModelDailyBudget.bind(this)}>
                                                                                <i className="icon icon-pen"></i>
                                                                            </a>
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td rowspan="1" colspan="1" className="col-view_count with-popover with-sort" style={{textAlign: 'right', minWidth: '100px', maxWidth: '100px'}}>
                                                                    <div className="spaui-table-td-inner">-</div>
                                                                </td>
                                                                <td rowspan="1" colspan="1" className="col-valid_click_count with-popover with-sort" style={{textAlign: 'right', minWidth: '100px', maxWidth: '100px'}}>
                                                                    <div className="spaui-table-td-inner">-</div>
                                                                </td>
                                                                <td rowspan="1" colspan="1" className="col-ctr with-popover with-sort" style={{textAlign: 'right', minWidth: '100px', maxWidth: '100px'}}>
                                                                    <div className="spaui-table-td-inner">-</div>
                                                                </td>
                                                                <td rowspan="1" colspan="1" className="col-cpc with-popover with-sort" style={{textAlign: 'right', minWidth: '100px', maxWidth: '100px'}}>
                                                                    <div className="spaui-table-td-inner">-</div>
                                                                </td>
                                                                <td rowspan="1" colspan="1" className="col-cost with-popover with-sort" style={{textAlign: 'right', minWidth: '100px', maxWidth: '100px'}}>
                                                                    <div className="spaui-table-td-inner">-</div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                        <tfoot>
                                                            <tr className="spaui-table-total ">
                                                                <td rowspan="1" colspan="1" className="col-checkbox" style={{textAlign: 'left', left: '0px'}}>
                                                                    <div className="spaui-table-td-inner">
                                                                        <label>总计：</label>
                                                                        <span className="spaui-table-fixed-td-border"></span>
                                                                    </div>
                                                                </td>
                                                                <td rowspan="1" colspan="1" className="col-switch" style={{textAlign: 'left', left: '0px'}}>
                                                                    <div className="spaui-table-td-inner">
                                                                        <span className="spaui-table-fixed-td-border"></span>
                                                                    </div>
                                                                </td>
                                                                <td rowspan="1" colspan="1" className="col-campaignname" style={{textAlign: 'left', left: '0px'}}>
                                                                    <div className="spaui-table-td-inner">
                                                                        <span className="spaui-table-fixed-td-border"></span>
                                                                    </div>
                                                                </td>
                                                                <td rowspan="1" colspan="1" className="col-status" style={{textAlign: 'left'}}>
                                                                    <div className="spaui-table-td-inner"></div>
                                                                </td>
                                                                <td rowspan="1" colspan="1" className="col-action" style={{textAlign: 'left'}}>
                                                                    <div className="spaui-table-td-inner"></div>
                                                                </td>
                                                                <td rowspan="1" colspan="1" className="col-product_type_name" style={{textAlign: 'left'}}>
                                                                    <div className="spaui-table-td-inner">-</div>
                                                                </td>
                                                                <td rowspan="1" colspan="1" className="col-addon with-popover" style={{textAlign: 'right'}}>
                                                                    <div className="spaui-table-td-inner"></div>
                                                                </td>
                                                                <td rowspan="1" colspan="1" className="col-view_count with-popover with-sort" style={{textAlign: 'right'}}>
                                                                    <div className="spaui-table-td-inner">-</div>
                                                                </td>
                                                                <td rowspan="1" colspan="1" className="col-valid_click_count with-popover with-sort" style={{textAlign: 'right'}}>
                                                                    <div className="spaui-table-td-inner">-</div>
                                                                </td>
                                                                <td rowspan="1" colspan="1" className="col-ctr with-popover with-sort" style={{textAlign: 'right'}}>
                                                                    <div className="spaui-table-td-inner">-</div>
                                                                </td>
                                                                <td rowspan="1" colspan="1" className="col-cpc with-popover with-sort" style={{textAlign: 'right'}}>
                                                                    <div className="spaui-table-td-inner">-</div>
                                                                </td>
                                                                <td rowspan="1" colspan="1" className="col-cost with-popover with-sort" style={{textAlign: 'right'}}>
                                                                    <div className="spaui-table-td-inner">-</div>
                                                                </td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="page">
                                            <div className="spaui-pagebar spaui-component">
                                                <div className="page-info">
                                                    <span>
                                                        <span className="txt">共 70 条记录，每页显示</span>
                                                        <div className=" spaui-dropdown spaui-select spaui-component">
                                                            <div className="selection-container selection-container-single">
                                                                <div className="selection-single">
                                                                    <span title="20" className="selection-single-text">
                                                                        <span>20</span>
                                                                    </span>
                                                                    <div className="selection-arrow">
                                                                        <svg width="16px" height="16px" viewBox="0 0 16 16">
                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                                                                                <polyline stroke="currentColor" points="4 6 8.5 10.5 13 6"></polyline>
                                                                            </g>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="selection-drop drop-top">
                                                                    <ul className="selection-results">
                                                                        <li className="selection-info" data-index="0">
                                                                            <div className="selection-name" title="10">
                                                                                <p>
                                                                                    <span className="name">10</span>
                                                                                </p>
                                                                            </div>
                                                                        </li>
                                                                        <li className="selection-info checked selected" data-index="1">
                                                                            <div className="selection-name" title="20">
                                                                                <p>
                                                                                    <span className="name">20</span>
                                                                                </p>
                                                                            </div>
                                                                        </li>
                                                                        <li className="selection-info" data-index="2">
                                                                            <div className="selection-name" title="50">
                                                                                <p>
                                                                                    <span className="name">50</span>
                                                                                </p>
                                                                            </div>
                                                                        </li>
                                                                        <li className="selection-info" data-index="3">
                                                                            <div className="selection-name" title="100">
                                                                                <p>
                                                                                    <span className="name">100</span>
                                                                                </p>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                    <div className="selection-tips"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="txt">条</span>
                                                    </span>
                                                </div>
                                                <ul className="pagination">
                                                    <li className="page-roll page-forward disabled">
                                                        <a data-index="0" title="0" href="javascript:;">
                                                            <i className="graph-icon graph-icon-line arrow-left graph-icon spaui-component"><i></i></i>
                                                        </a>
                                                    </li>
                                                    <li className="active">
                                                        <a data-index="1" title="1" href="javascript:;">1</a>
                                                    </li>
                                                    <li className="">
                                                        <a data-index="2" title="2" href="javascript:;">2</a>
                                                    </li>
                                                    <li className="">
                                                        <a data-index="3" title="3" href="javascript:;">3</a>
                                                    </li>
                                                    <li className="">
                                                        <a data-index="4" title="4" href="javascript:;">4</a>
                                                    </li>
                                                    <li className="page-roll backward">
                                                        <a data-index="2" title="2" href="javascript:;">
                                                            <i className="graph-icon graph-icon-line arrow-right graph-icon spaui-component" ><i></i></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <span className="page-info">
                                                    <span className="txt">共 4 页</span>
                                                </span>
                                                <div className="form-group spaui-form-group spaui-component" >
                                                    <input name="" placeholder="" type="text" className="spaui-input spaui-component"value=""/>
                                                    <button className="spaui-button spaui-button-default spaui-component" type="button">跳转</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`a-table-action-menu ${this.state.isShowActionMenu?'':'none'}`} style={{left: this.state.menuLeft, top: this.state.menuTop}} id="a-table-action-menu">
                        <a role="button" href="javascript:;" data-hottag="Click.Function.admanage.campaign.action.data">查看数据</a>
                        <a role="button" href="javascript:;" data-hottag="Click.Function.admanage.campaign.action.oplog">操作记录</a>
                        <a role="button" href="javascript:;" data-hottag="Click.Function.admanage.campaign.action.delete">删除</a>
                    </div>
                </div>
                {/* 修改推广计划名弹窗 */}
                <div>
                    <div className={`spaui-dialog-portal spaui-component ${this.state.isShowModelCampaignName?'':'none'}`}>
                        <div className="fade in modal show" style={{zIndex: '5', position: 'absolute', width: '100%', height: '1433px'}}>
                            <div data-dialog-id="spaui-dialog_8" className="modal-dialog spaui-dialog modal-mini modal-mini-adname modal-simple spaui-component"  title="" style={{width: '392px', left: this.state.modelCampaignNameLeft, top: this.state.modelCampaignNameTop}}>
                                <div className="modal-content spaui-dialog-content">
                                    <div className="modal-body">
                                        <div className="spaui-form">
                                            <div className="form-group spaui-form-group has-feedback spaui-component" >
                                                <input placeholder="推广计划名称" name="campaign_name" campaign_name={this.state.campaign_name} type="text" className="spaui-input spaui-component" />
                                                <span className="spaui-input-feedback ">
                                                    <span>
                                                        <span className="spaui-input-feedback-count">19</span>
                                                        <span className="spaui-input-feedback-divider">/</span>
                                                        <span className="spaui-input-feedback-range">40</span>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <div>
                                            <button className="spaui-button spaui-button-default spaui-button-sm spaui-component"  type="button" onClick={this.handleCancel.bind(this,'model_campaign_name')}>取消</button>
                                            <button className="spaui-button spaui-button-primary spaui-button-sm spaui-component"  type="button" onClick={this.handleOk.bind(this,'model_campaign_name')}>确定</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 修改日限额弹窗 */}
                <div>
                    <div class={`spaui-dialog-portal spaui-component ${this.state.isShowModelDailyBudget?'':'none'}`}>
                        <div class="fade in modal show" style={{zIndex: '5', position: 'absolute', width: '100%', height: '1433px'}}>
                            <div data-dialog-id="spaui-dialog_10" class="modal-dialog spaui-dialog modal-mini modal-mini-adname modal-simple spaui-component" title="" style={{width: '392px', left: this.state.modelDailyBudgetLeft,top: this.state.modelDailyBudgetTop}}>
                                <div class="modal-content spaui-dialog-content">
                                    <div class="modal-body">
                                        <div class="spaui-form">
                                            <label class="spaui-label">日限额：</label>
                                            <div class="form-group spaui-form-group has-feedback has-helpblock spaui-component" >
                                                <input class="spaui-input spaui-input input-sm spaui-component" name="daily_budget" daily_budget={this.state.daily_budget} placeholder="" type="text"  />
                                                <span class="help-block ">最低额度是该推广计划的今日消耗加上50元。</span>
                                                <span class="spaui-input-feedback ">元</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <div>
                                            <button class="spaui-button spaui-button-default spaui-button-sm spaui-component" type="button" onClick={this.handleCancel.bind(this,'model_daily_budget')}>取消</button>
                                            <button class="spaui-button spaui-button-primary spaui-button-sm spaui-component" type="button" onClick={this.handleOk.bind(this,'model_daily_budget')}>确定</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

render(<Admanage/>, document.getElementById('Admanage'));