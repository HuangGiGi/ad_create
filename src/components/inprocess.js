import React from 'react';
import {render} from 'react-dom';
import axios from 'axios'
import { Carousel } from 'react-bootstrap';
import { DatePicker} from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import 'antd/es/date-picker/style/css';
const { RangePicker } = DatePicker;
// 获取今天的时间
const dateFormat = 'YYYY-MM-DD'; // 定义你需要的时间格式
const currentday = moment().subtract('0','day').format(dateFormat); 


import '../style/css/base-bts-1.2.0.css'
import '../style/css/module-2.2.6.css'
import '../style/css/lib-export-20190415_1139.css'
import '../style/css/process-20190422_1156.css'

import { AdTargeting } from '@tencent/mktui';
const { AdTargetingForm ,AdTargetingUtils} = AdTargeting;
// import TSAUI_AdTargetingUtils from '@tencent/mktui/node_modules/@tencent/tsaui-adtargeting-utils';

// 定向配置，可以通过以下url获取：
// https://i.gtimg.cn/qzone/biz/gdt/lib/mktui/1.1/config/mktui_adtargeting_config.js
import {  config as targetingConfig } from '../data/tsaui_adtargeting_config.js';
import targetingTagsMock from '../data/tsaui_targeting_tags_get.js';

const { validator ,utils} = AdTargetingUtils;
const { validateField, validateTargeting } = validator;
const { addTreeSelectorsConfig } = utils;
const config = Object.assign({}, targetingConfig);
// const host = 'http://mkt.3456wan.local.com/tencent'
// const host = 'http://mkt.3456wan.com/tencent'
const host = ''
const packageList = [];
//创意
// import AdCreative from '../components/adCreative.js'
//adcreativeTemplates模拟数据
// import adcreativeTemplatesMock from '../data/tsaui_adcreative_templates_mock.js';
// const adcreative_template = adcreativeTemplatesMock.template_366.data.list[0];

import { AdCreative } from '@tencent/mktui';

const { AdCreativeForm ,AdCreativeUtils} = AdCreative;

import { ImageClipper } from '@tencent/mktui';

import _ from 'lodash';

import adcreativeMock from '../data/tsaui_adcreative_mock.js';


const { validator: AdcreativeValidator, utils: AdcreativeUtils } = AdCreativeUtils;
const { genDefaultData } = AdcreativeUtils;
const { validateField: AdcreativeValidateField, validateCreative } = AdcreativeValidator;

const { images_get_resp, images_add_resp , videos_get_resp,videos_add_resp,smart_cropped_images_add_resp, custom_cropped_images_add_resp, custom_cropped_images_get_resp} = adcreativeMock;

import Validator from './validate';



class AdProduct extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
            hide:false,//是否隐藏组件
            disabled:false,//按钮是否可点
            account_id:'',
            campaign_type:'CAMPAIGN_TYPE_NORMAL',//计划类型
            show_promoted_object_model:false,//是否显示弹窗
            promoted_object_type_changed:'',//修改后的推广目标类型
            show_adcreative_template_model: false,//是否显示弹窗
            adcreative_template_changed:'',//修改后的广告版位id
            campaign_type:"CAMPAIGN_TYPE_NORMAL",//推广计划类型
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
            //广告组
            isShowAdgroup:false,//是否显示广告组
            isShow_promoted_object_list:false,//是否显示应用id列表
            promoted_object_list:[],//应用id列表promoted_object_list
            promoted_object_id:'',//应用id
            promoted_object_id_error:'',//应用id错误
            selected_game_icon:'',//选中应用icon
            promoted_object_name:'',//选中应用名称
            result_list:[],//应用id的搜索结果
            isShowChannelPackageDiv:false,//是否显示渠道包div
            app_android_channel_package_id:'',//渠道包id
            channel_package_name:'',//渠道包名
            channel_package_list:[],//渠道包列表
            channel_package_result_list:[],//渠道包id的搜索结果
            isShow_channel_package:false,//是否显示渠道包列表
            isSavePackage:false,//是否保存定向包
            target_package_name:'',//定向包名称
            expand_enabled:false,//是否自动扩量
            ocpa_expand_enabled:false,//是否使用 oCPA 自动扩量
            ocpa_expand_targeting:{},//oCPA 扩量定向
            cpc_expand_enabled:false,//是否使用 CPC 扩量定向
            cpc_expand_targeting:{},//CPC 扩量定向
            target_package_name_length:0,//定向包名称长度
            adcreative_template:'',//创意模板
            adcreative_template_id:'',//选择的广告版位id
            adcreative_template_style:'',//选择的广告版位类型
            adcreative_template_name:'',//选择的广告版位名称
            adcreative_sample_image_list:[],//选择的广告版位图片列表
            site_set:[],//站点集合
            creative_template_list:[],//广告版位列表
            creative_template_page:1,//广告版位当前页
            creative_template_total_page:1,//广告版位最后一页
            creative_template_uped_list:[],//广告版位置顶列表
            creative_template_up_list:[],//广告版位非置顶列表
            isPreview:false,//广告版位是否预览
            ad_date:'long_delivery',//投放日期，默认长期投放
            begin_date:currentday,//投放开始时间
            end_date:currentday,//投放结束时间，长期投放为空
            ad_time:'allTime',//投放时间，默认全天
            time_series:'111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
            isStartTime:false,//是否显示特定时间段的开始时间
            start_time_list:[{time:'00:00'},{time:'01:00'},{time:'02:00'},{time:'03:00'},{time:'04:00'},{time:'05:00'}, {time:'06:00'},{time:'07:00'},{time:'08:00'},{time:'09:00'},{time:'10:00'}, {time:'11:00'},{time:'12:00'},{time:'13:00'}, {time:'14:00'},{time:'15:00'},{time:'16:00'},{time:'17:00'},{time:'18:00'},{time:'19:00'},{time:'20:00'},{time:'21:00'},{time:'22:00'},{time:'23:00'},{time:'24:00'},],//开始时间列表
            start_time:'00:00',
            isEndTime:false,//是否显示特定时间段的结束时间
            end_time_list:[{time:'24:00'},{time:'23:00'},{time:'22:00'},{time:'21:00'},{time:'20:00'},{time:'19:00'},{time:'18:00'},{time:'17:00'},{time:'16:00'},{time:'15:00'},{time:'14:00'},{time:'13:00'},{time:'12:00'},{time:'11:00'},{time:'10:00'},{time:'09:00'},{time:'08:00'},{time:'07:00'},{time:'06:00'},{time:'05:00'}, {time:'04:00'}, {time:'03:00'},{time:'02:00'},{time:'01:00'},{time:'00:00'},],//结束时间列表
            end_time:'24:00',
            bid_method:'CPC',//出价方式
            billing_event:'BILLINGEVENT_CLICK',//计费类型
            suggest_min_bid_amount:0,//建议最小出价
            suggest_max_bid_amount:0,//建议最大出价
            bid_amount:'',//广告出价
            bid_amount_error:'',//广告出价错误
            isShowOptimizationGoal:false,
            optimization_goal:'OPTIMIZATIONGOAL_CLICK',//广告优化目标类型
            optimization_goal_name:'激活',//广告优化目标类型名字
            optimization_goal_list:[
                {value: 'OPTIMIZATIONGOAL_APP_ACTIVATE', name: "激活"},
                {value: 'OPTIMIZATIONGOAL_ECOMMERCE_ORDER', name: "下单"},
                {value: 'OPTIMIZATIONGOAL_APP_PURCHASE', name: "付费"},
                {value: 'OPTIMIZATIONGOAL_APP_REGISTER', name: "注册"},
                {value: 'OPTIMIZATIONGOAL_VIEW_COMMODITY_PAGE', name: "商品详情页浏览"},
                {value: 'OPTIMIZATIONGOAL_ONE_DAY_RETENTION', name: "次日留存"},
                {value: 'OPTIMIZATIONGOAL_ECOMMERCE_CART', name: "加入购物车"},
            ],
            // billing_event:'BILLINGEVENT_CLICK',//计费方式
            adgroup_name:'',//广告名称
            adgroup_name_error:'',//广告名称错误
            //广告创意模块
            isShowAdCreative:false,//是否显示广告创意模块
            bid_error:'',//排期与出价的错误提示
            //定向配置
            config,
            targeting: {},
            checkedFields: [],
            errorTips: {},
            showError: false,
            // 搜索数据
            searchData: {},
            // 搜索框是否展开
            searchDataPanelOpen: {},
            // 推荐数据
            recommendData: {},
            // 人群包列表数据
            customAudiencePackages: {
                custom_audience: [],
                excluded_custom_audience: []
            },
            // 页码数据
            pageInfo: {
                custom_audience: {
                    page: 1,
                    pageSize: 5,
                },
                excluded_custom_audience: {
                    page: 1,
                    pageSize: 5,
                }
            },
            packageId: '',
            //创意
            adcreative_elements:'',
            template: '',
        };
        this.config = {
            imageUploadUrl: host+'/images/add',
            videoUploadUrl: host+'/videos/add',
            imageFileName: 'file',
            videoFileName: 'video_file',
            getImagePreviewUrl: host+'/images/get?account_id='+this.state.account_id,
            getVideoPreviewUrl: host+'/videos/get?account_id='+this.state.account_id,
            // getImagePreviewUrl: host+'/images/get',
            // getVideoPreviewUrl: host+'/videos/get',
            // needImageProcessing: true,
            // maxOneRowDisplayNumber: 3 ,   // 一行最多展示多少个上传框（可取 3-5）
            // hasMediaId: true,  // 媒体字段的值是否为image_id，false表示为url
        };
    }
    
    //确定
    handleOk(model_type,selected){
        if(model_type==='promoted_object_model'){
            this.setState({
                show_promoted_object_model: false,
                isShowAdgroup:false,
                promoted_object_type:selected
            });
            return
        }
        if(model_type==='adcreative_template_model'){
            this.setState({
                show_adcreative_template_model: false,
                adcreative_template_id:selected
            })
            return
        }
    };
    //取消
    handleCancel(model_type){
        if(model_type==='promoted_object_model'){
            this.setState({
                show_promoted_object_model: false,
            });
            return
        }
        if(model_type==='adcreative_template_model'){
            this.setState({
                show_adcreative_template_model: false,
            })
            return
        }
    };

    //获取url参数
    getQueryVariable(variable)
    {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }
    componentDidMount(){
        
        const list = [...this.state.creative_template_list]
        //分成置顶和非置顶
        list.map((item,index)=>{
            if(item.action == 'uped'){
                this.state.creative_template_uped_list.push(item)
            }
            else if(item.action == 'up'){
                this.state.creative_template_up_list.push(item)
            }
        })
        //根据曝光量排序
        const sortUpedList = this.state.creative_template_uped_list.sort(this.compare('impression'))
        this.setState({
            creative_template_uped_list:sortUpedList
        })
        const sortUpList = this.state.creative_template_up_list.sort(this.compare('impression'))
        this.setState({
            creative_template_up_list:sortUpList
        })
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
            // var form = {
            //     'ad_date': this.state.ad_date,
                
            // };
            var result = Validator.validate({
                [name]:value
            });
            console.log('before: ', result);
            if(result !== true) {
                return this.setState(result);
            }
            console.log('after: ', result);

            if( name === 'daily_budget'){
               
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
            else if(name === 'target_package_name'){
                this.setState({
                    target_package_name_length:this.state.target_package_name.length
                })
            }
            else if( name === 'promoted_object_id'){
                const searchValue = this.state.promoted_object_id
                const promoted_object_list = this.state.promoted_object_list
                const result_list = []
                const _value = searchValue.replace(/\s/ig,'')//去掉字符串中的空格
                promoted_object_list.map((item,index)=>{
                    if(item.promoted_object_id.indexOf(_value)>-1){
                        result_list.push(item)
                    }
                })
                this.setState({
                    result_list:result_list,
                })
            }
            else if( name === 'searchPackageName'){
                const channel_package_list = this.state.channel_package_list
                const result_list = []
                const searchValue = this.state.searchPackageName.replace(/\s/ig,'')//去掉字符串中的空格
                channel_package_list.map((item,index)=>{
                    if(item.package_name.indexOf(searchValue)>-1){
                        result_list.push(item)
                    }
                })
                this.setState({
                    channel_package_result_list:result_list
                })
            }
            else if(name==='bid_method'){//出价方式
                if(value === 'CPC'){
                    this.setState({
                        billing_event:'BILLINGEVENT_CLICK',
                        optimization_goal:'OPTIMIZATIONGOAL_CLICK'
                    })
                }
                else if(value === 'CPM'){
                    this.setState({
                        billing_event:'BILLINGEVENT_IMPRESSION',
                        optimization_goal:'OPTIMIZATIONGOAL_IMPRESSION'
                    })
                }
                else if(value === 'oCPA'){
                    this.setState({
                        billing_event:'BILLINGEVENT_CLICK',
                        optimization_goal:'OPTIMIZATIONGOAL_APP_ACTIVATE'
                    })
                }
            }
            else if(name === 'bid_amount'){
                if(value===''){
                    this.setState({
                        bid_amount_error:'不能为空',
                    })
                    return 
                }
                if(value<this.state.suggest_min_bid_amount||value>this.state.suggest_max_bid_amount){
                    this.setState({
                        bid_amount_error:'建议为'+this.state.suggest_min_bid_amount+'~'+this.state.suggest_max_bid_amount,
                    })
                    return
                }
                this.setState({
                    bid_amount_error:'',
                })
            }
            else if(name==='adgroup_name'){
                if(value===''){
                    this.setState({
                        adgroup_name_error:'不能为空',
                    })
                    return 
                }
                this.setState({
                    adgroup_name_error:'',
                })
            }
        })
    }
    //选择推广目标类型
    selectPromotedObjectType(type){
        if(this.state.isShowAdgroup){
            this.setState({
                show_promoted_object_model:true,//显示修改推广目标弹窗
                promoted_object_type_changed:type,
                
            })
            return
        }
        this.setState({
            promoted_object_type:type,
            promoted_object_type_error:'',
        })
        
    }
    //获取adcreative_templates
    getAdTemplates(page){
        //获取广告创意
        axios({
            method:'get',
            url:host +'/adcreative_templates/get',
            params:{
                account_id:this.state.account_id,//当前操作账号
                promoted_object_type: this.state.promoted_object_type,//推广目标类型
                page:page,
            }
        })
        .then((res)=>{
            const result_list = res.data.data.list
            const creative_template_list = []
            result_list.map((item,index)=>{
                if(item.adcreative_template_description){
                    creative_template_list.push(item)
                }
            })
            this.setState({
                creative_template_list:creative_template_list,
                creative_template_page:res.data.data.page_info.page,
                creative_template_total_page:res.data.data.page_info.total_page
            })  
            
        })
        .catch((error)=>{
            console.log('axios 获取数据失败'+error)
        })
    }
    nextPage(){
        this.state.creative_template_page = this.state.creative_template_page + 1
        this.getAdTemplates(this.state.creative_template_page)
    }
    prePage(){
        this.state.creative_template_page = this.state.creative_template_page - 1
        this.getAdTemplates(this.state.creative_template_page)
    }
    

    //创建推广计划
    createCampaign(){
        var result = Validator.validate(this.state);
        if(result !== true) {
            return this.setState(result);
        }

        if(!this.state.account_id){
            alert('获取不到当前账号id');
            return
        }
        this.setState({disabled:true})
        axios({
            method:'post',
            url:host +'/campaigns/add',
            data:{
                account_id:this.state.account_id,//当前操作账号
                campaign_type: this.state.campaign_type,//计划类型
                promoted_object_type: this.state.promoted_object_type,//推广目标类型
                daily_budget:parseInt(this.state.daily_budget),//日限额
                speed_mode:this.state.speed_mode,//投放模型
                channel_ad_id:this.state.channel_ad_id,//广告位id
                design_id:this.state.design_id,//素材id
                campaign_name:this.state.campaign_name,//计划名称
            }
        })
        .then((res)=>{
            if(res.data.code ==0){
                this.setState({
                    campaign_id:res.data.data.campaign_id,
                    disabled:false,
                    isShowAdgroup:true,
                })
            }
            
        })
        .catch((error)=>{
            this.setState({
                disabled:false,
            })
            console.log('axios 获取数据失败'+error)
        })
        //获取应用列表
        axios({
            method:'get',
            url:host +'/promoted_objects/get',
            params:{
                account_id:this.state.account_id,//当前操作账号
                promoted_object_type: this.state.promoted_object_type,//推广目标类型
            }
        })
        .then((res)=>{
            this.setState({
                promoted_object_list:res.data.data.list,
            })
        })
        .catch((error)=>{
            this.setState({disabled:false})
            console.log('axios 获取数据失败'+error)
        })
        this.getAdTemplates(this.state.creative_template_page)
    }
    onChangeLongDeliveryDate(date, dateString){
        this.setState({
            begin_date:dateString,
            end_date:''
        })
    }
    onChangeShortDeliveryDate(date, dateString){
        this.setState({
            begin_date:dateString[0],
            end_date:dateString[1]
        })
    }
    //是否显示特定时间段的开始时间
    isShowStartTime(){
        this.setState({
            isStartTime:!this.state.isStartTime,
            isEndTime:false,
        })
    }
    //选择开始时间
    selectStartTime(time){
        this.setState({
            start_time:time,
            isStartTime:false,
        })
    }
    //是否显示特定时间段的结束时间
    isShowEndTime(){
        this.setState({
            isEndTime:!this.state.isEndTime,
            isStartTime:false,
        })
    }
    //选择结束时间
    selectEndTime(time){
        this.setState({
            end_time:time,
            isEndTime:false,
        })
    }
    //显示隐藏应用id列表
    showAdgroupProductList(event){
        this.setState({
            result_list:this.state.promoted_object_list,
            isShow_promoted_object_list:!this.state.isShow_promoted_object_list
        })
    }
    //选择应用id promoted_object_id selectPromotedObjectId
    selectPromotedObjectId(game_icon,promoted_object_id,promoted_object_name){
        this.setState({
            promoted_object_id:promoted_object_id,//选中应用id
            selected_game_icon:game_icon,//选中应用icon
            promoted_object_name:promoted_object_name,//选中应用名称
            isShow_promoted_object_list:false,//隐藏应用id列表
            isShowChannelPackageDiv:true,
            promoted_object_id_error:'',
        },()=>{
            // 根据应用id确定渠道包id
            const promoted_object_list = this.state.promoted_object_list
            const result_list = promoted_object_list.filter(item=>item.promoted_object_id === promoted_object_id)
            
            this.setState({
                channel_package_list:result_list[0].promoted_object_spec.app_android_spec.channel_package_spec,
                channel_package_result_list:result_list[0].promoted_object_spec.app_android_spec.channel_package_spec
            })
            
        })
    }
    //删除应用id
    delall(){
        this.setState({
            promoted_object_id:'',//应用id
            selected_game_icon:'',//选中应用icon
            promoted_object_name:'',//选中应用名称
            searchValue:'',
            app_android_channel_package_id:'',//渠道包id
            channel_package_name:'',//渠道包名
            isShowChannelPackageDiv:false,
        })
    }
    //显示隐藏渠道包列表
    showPackageList(){
        this.setState({
            isShow_channel_package:!this.state.isShow_channel_package,
        })
    }
    selectPackageId(id,name){
        this.setState({
            app_android_channel_package_id:id,//渠道包id
            channel_package_name:name,//渠道包名
            isShow_channel_package:false,
        })
    }
    //显示隐藏定向包名称
    showPackageName(){
        this.setState({
            isSavePackage:!this.state.isSavePackage
        })
    }
    //显示隐藏自动扩量
    showExpandEnabled(){
        this.setState({
            expand_enabled:!this.state.expand_enabled
        })
    }
    //选择广告版本，预览
    selectCreativeTemplate(adcreative_template_id,adcreative_sample_image_list,site_set,adcreative_template){
        if(this.state.isShowAdCreative){
            this.setState({
                show_adcreative_template_model:true,
                isShowAdCreative:false,
                adcreative_template_changed:adcreative_template_id,
                adcreative_sample_image_list:adcreative_sample_image_list,
                site_set:[site_set],

                template:adcreative_template,
                adcreative_elements:genDefaultData(adcreative_template) ,
                adcreative_template_error:'',
            })
            return
        }
        this.setState({
            isPreview:true,
            adcreative_template_id:adcreative_template_id,
            adcreative_sample_image_list:adcreative_sample_image_list,
            site_set:[site_set],

            template:adcreative_template,
            adcreative_elements:genDefaultData(adcreative_template) ,
            adcreative_template_error:'',
        },()=>{
            console.log(this.state.template)
            console.log(this.state.adcreative_elements)
        })
    }
    //显示隐藏置顶
    showTop(action,id){
        const upedList = [...this.state.creative_template_uped_list]
        const upList = [...this.state.creative_template_up_list]
        if(action==='uped'){
            upedList.map((item,index)=>{
                if(item.adcreative_template_id === id){
                    upedList.splice(index, 1)//从置顶中删除非置顶
                    this.setState({
                        creative_template_uped_list:upedList,
                        creative_template_up_list:[...upList, {...item,action:'up'}]//从非置顶中增加非置顶
                    },()=>{
                        //根据曝光量排序
                        const sortUpedList = this.state.creative_template_uped_list.sort(this.compare('impression'))
                        this.setState({
                            creative_template_uped_list:sortUpedList
                        })
                        const sortUpList = this.state.creative_template_up_list.sort(this.compare('impression'))
                        this.setState({
                            creative_template_up_list:sortUpList
                        })
                    })
                }
            })
        }
        if(action==='up'){
            upList.map((item,index)=>{
                if(item.adcreative_template_id === id){
                    upList.splice(index, 1)//从非置顶中删除置顶
                    this.setState({
                        creative_template_up_list:upList,
                        creative_template_uped_list:[...upedList, {...item,action:'uped'}]//从置顶中增加置顶
                    },()=>{
                        //根据曝光量排序
                        const sortUpedList = this.state.creative_template_uped_list.sort(this.compare('impression'))
                        this.setState({
                            creative_template_uped_list:sortUpedList
                        })
                        const sortUpList = this.state.creative_template_up_list.sort(this.compare('impression'))
                        this.setState({
                            creative_template_up_list:sortUpList
                        })
                    })
                }
            })
            
        }
    }
    //比较大小
    compare(keyName){
        return function(object1,object2){
            let value1 = object1[keyName]
            let value2 = object2[keyName]
            if( value2 > value1 ){
                return 1
            } else if( value2 < value1 ){
                return -1
            } else {
                return 0
            }
        }
    }
    //选择优化目标
    selectOptimizationGoal(value,name){
        this.setState({
            optimization_goal:value,
            optimization_goal_name:name,
            isShowOptimizationGoal:false,
        })
    }
    //是否显示优化目标
    showOptimizationGoal(){
        this.setState({
            isShowOptimizationGoal:!this.state.isShowOptimizationGoal
        })
    }
    
    
    //建议出价
    getEstimation(){
        if(this.state.bid_method === 'oCPA'){
            this.setState({
                bid_amount_error:''
            })
            return
        }
        let data ={
            account_id:this.state.account_id,//当前操作账号ID
        }
        if(this.state.campaign_id!==''){
            data.campaign_id = this.state.campaign_id//推广计划id
        }
        if(this.state.adgroup_name!==''){
            data.adgroup_name = this.state.adgroup_name//广告名称
        }
        if(this.state.site_set!==''){
           data.site_set = this.state.site_set//站点集合
        }
        if(this.state.bid_amount!==''){
            data.bid_amount = this.state.bid_amount//广告出价
        }
        if(this.state.promoted_object_type!==''){
            data.promoted_object_type = this.state.promoted_object_type//推广目标类型
        }
        if(this.state.billing_event!==''){
            data.billing_event = this.state.billing_event//计费类型
        }
        if(this.state.optimization_goal!==''){
            data.optimization_goal = this.state.optimization_goal//广告优化目标类型
        }
        if(this.state.promoted_object_id!==''){
            data.promoted_object_id = this.state.promoted_object_id//推广目标id,(应用id)
        }
        if(this.state.time_series!==''){
            data.time_series = this.state.time_series //投放时间段
        }
        if(this.state.adcreative_template_id!==''){
            data.adcreative_template_id = this.state.adcreative_template_id//创意规格id
        }
        if(this.state.adcreative_elements!==''){
            data.adcreative_elements =this.state.adcreative_elements //广告创意
        }
        if(this.state.targeting!==''){
            data.targeting = this.state.targeting //定向
        }
        if(this.state.campaign_type!==''){
            data.campaign_type = this.state.campaign_type//推广计划类型
        }
        if(this.state.daily_budget!==''){
            data.daily_budget = this.state.daily_budget//日限额
        }
       
        if(this.state.adcreative_template_id===''){
            this.setState({
                bid_amount_error:'与广告版位相关，请选择广告版位'
            })
            return
        }else{
            this.setState({
                bid_amount_error:''
            })
        }
        axios({
            method: 'post',
            url: host+'/estimation/get',
            data: data,
        })
        .then((res)=>{
            this.setState({
                suggest_min_bid_amount:res.data.data.suggest_min_bid_amount/100,
                suggest_max_bid_amount:res.data.data.suggest_max_bid_amount/100
            })
        })
        .catch((error)=>{
            console.log('axios 获取数据失败'+error)
        })
    }
    //显示创意
    showAdCreative(){
        var result = Validator.validate(this.state);
        if(result !== true) {
            return this.setState(result);
        }
       

        //定向
        const { targeting, checkedFields } = this.state;
        const TargetingErrorTips = validateTargeting(targeting, targetingConfig.targeting_fields, checkedFields);
        // 过滤一下未被选择的定向
        // 注意：自定义人群验证需特殊处理 (custom_audience 定向和 excluded_custom_audience 定向统一放在了 custom_audiences 字段配置之下)
        for (let name in targeting) {
            let checkName = name
            if (['custom_audience', 'excluded_custom_audience'].includes(checkName)) {
                checkName = 'custom_audiences'
            }

            if (!checkedFields.includes(checkName)) {
                delete targeting[checkName]
            }
        }
        console.log('定向数据：');
        console.log(targeting);
        
        this.setState({
            errorTips:TargetingErrorTips,
            showError: true
        });
            
        
    
        //判断是哪种自动扩量
        if(this.state.expand_enabled){
            if(this.state.bid_method=='CPC'){
                this.setState({
                    cpc_expand_enabled:true
                })
            }
            else if(this.state.bid_method=='oCPA'){
                this.setState({
                    ocpa_expand_enabled:true
                })
            }
            else{
                this.setState({
                    bid_error:'CPM、CPA、CPC（DPA广告）计费方式暂不支持自动扩量功能，去修改自动扩量'
                })
            }
        }
        //time_series转化成二进制
        if( this.state.ad_time === 'allTime'){
            this.setState({
                time_series:'111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
            })
        }
        else if( this.state.ad_time === 'partTime'){
            let time_range_start = parseInt(this.state.start_time);
            let time_range_end = parseInt(this.state.end_time);
            let timeSeries = '';
            for(let j=0;j<7;j++){
                for(let i=0;i<24;i++){
                    if(i<time_range_start || i>time_range_end-1){
                        timeSeries += '00';
                    }else{
                        timeSeries += '11';
                    }
                }
            }
            this.setState({
                time_series:timeSeries
            })
        }
        axios({
            method: 'post',
            url: host+'/adgroups/add',
            data: {
                account_id:this.state.account_id,//当前操作账号ID
                campaign_type: this.state.campaign_type,//计划类型
                promoted_object_type: this.state.promoted_object_type,//推广目标类型
                daily_budget:this.state.daily_budget,//日限额
                speed_mode:this.state.speed_mode,//投放速度模式
                channel_ad_id:this.state.channel_ad_id,//广告位id,
                design_id:this.state.design_id,// 素材ID
                campaign_name:this.state.campaign_name,//推广计划名称
                promoted_object_id:this.state.promoted_object_id,//推广目标id,(应用id)
                app_android_channel_package_id:this.state.app_android_channel_package_id,//渠道包id
                targeting:this.state.targeting,//定向
                adcreative_template_id:this.state.adcreative_template_id,//创意规格id
                site_set:this.state.site_set,//站点集合
                begin_date:this.state.begin_date,//开始投放日期
                end_date:this.state.end_date,//结束投放日期
                billing_event:this.state.billing_event,//计费类型
                bid_amount:this.state.bid_amount,//广告出价
                optimization_goal:this.state.optimization_goal,//广告优化目标类型
                time_series:this.state.time_series,//投放时间段
                adgroup_name:this.state.adgroup_name,//广告名称
                campaign_id:this.state.campaign_id,//推广计划id
            }
        })
        .then((res)=>{
            if(res.data.code==0){
                this.setState({
                    disabled:false,
                    isShowAdCreative:true,
                    adgroup_id:res.data.data.adgroup_id
                })
                console.log('axios 获取数据成功:'+res.data)  
            } 
        })
        .catch((error)=>{
            console.log('axios 获取数据失败'+error)
            this.setState({disabled:false})
        })
        // this.setState({
        //     isShowAdCreative:true,
        // })
    }
    
    //提交表单内容
    submitForm(){
        var result = Validator.validate(this.state);
        if(result !== true) {
            return this.setState(result);
        }
       
       
        //定向
        const { targeting, checkedFields } = this.state;
        const TargetingErrorTips = validateTargeting(targeting, targetingConfig.targeting_fields, checkedFields);
        // 过滤一下未被选择的定向
        // 注意：自定义人群验证需特殊处理 (custom_audience 定向和 excluded_custom_audience 定向统一放在了 custom_audiences 字段配置之下)
        for (let name in targeting) {
            let checkName = name
            if (['custom_audience', 'excluded_custom_audience'].includes(checkName)) {
                checkName = 'custom_audiences'
            }

            if (!checkedFields.includes(checkName)) {
                delete targeting[checkName]
            }
        }
        console.log('定向数据：');
        console.log(targeting);
        this.setState({
            errorTips:TargetingErrorTips,
            showError: true
        });
            
     
        //判断是哪种自动扩量
        if(this.state.expand_enabled){
            if(this.state.bid_method=='CPC'){
                this.setState({
                    cpc_expand_enabled:true
                })
            }
            else if(this.state.bid_method=='oCPA'){
                this.setState({
                    ocpa_expand_enabled:true
                })
            }
            else{
                this.setState({
                    bid_error:'CPM、CPA、CPC（DPA广告）计费方式暂不支持自动扩量功能，去修改自动扩量'
                })
            }
        }
        //time_series转化成二进制
        if( this.state.ad_time === 'allTime'){
            this.setState({
                time_series:'111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
            })
        }
        else if( this.state.ad_time === 'partTime'){
            let time_range_start = parseInt(this.state.start_time);
            let time_range_end = parseInt(this.state.end_time);
            let timeSeries = '';
            for(let j=0;j<7;j++){
                for(let i=0;i<24;i++){
                    if(i<time_range_start || i>time_range_end-1){
                        timeSeries += '00';
                    }else{
                        timeSeries += '11';
                    }
                }
            }
            this.setState({
                time_series:timeSeries
            })
        }
        
        //创意
        const { adcreative_elements, template } = this.state;

        // validate the form
        let adcreativeErrorTips = validateCreative(adcreative_elements, template);
       
        this.setState({
            errorTips:adcreativeErrorTips,
            showError: true
        });
        // demo调试
        console.log('创意数据：');
        console.log(adcreative_elements);

        this.setState({disabled:true})
        axios({
            method: 'post',
            url: host+'/ads/add',
            data: {
                account_id:this.state.account_id,//当前操作账号ID
                campaign_type: this.state.campaign_type,//推广计划类型
                promoted_object_type: this.state.promoted_object_type,//推广目标类型
                daily_budget:this.state.daily_budget,//日限额
                speed_mode:this.state.speed_mode,//投放速度模式
                channel_ad_id:this.state.channel_ad_id,//广告位id,
                design_id:this.state.design_id,// 素材ID
                campaign_name:this.state.campaign_name,//推广计划名称
                promoted_object_id:this.state.promoted_object_id,//推广目标id,(应用id)
                app_android_channel_package_id:this.state.app_android_channel_package_id,//渠道包id
                targeting:this.state.targeting,//定向
                adcreative_template_id:this.state.adcreative_template_id,//创意规格id
                site_set:this.state.site_set,//站点集合
                begin_date:this.state.begin_date,//开始投放日期
                end_date:this.state.end_date,//结束投放日期
                billing_event:this.state.billing_event,//计费类型
                bid_amount:this.state.bid_amount,//广告出价
                optimization_goal:this.state.optimization_goal,//广告优化目标类型
                time_series:this.state.time_series,//投放时间段
                adgroup_name:this.state.adgroup_name,//广告名称
                adcreative_elements:this.state.adcreative_elements,//广告创意
                batch_num:this.state.batch_num,// 批量创建数量
                campaign_id:this.state.campaign_id,//推广计划id
                adgroup_id:this.state.adgroup_id,//广告组id
            }
        })
        .then((res)=>{
            if(res.data.code==0){
                console.log('axios 获取数据成功:'+res.data)  
                this.setState({disabled:false})
                alert('提交成功')
            }else{
                alert(res.data.message)
                this.setState({disabled:false})
            }
            
        })
        .catch((error)=>{
            console.log('axios 获取数据失败'+error)
            this.setState({disabled:false})
        })
    }
    
    
    render() {
        const { targeting, checkedFields, errorTips, showError, searchData, searchDataPanelOpen, recommendData, config: stateConfig,customAudiencePackages, pageInfo, autoCompleteData,packageId,adcreative_elements, template } = this.state;
    	return (
            <div className={`${this.state.hide?'none':''}`}>
                {/* 修改推广目标弹窗 */}
                <div role="dialog" className={`spa-ui ${this.state.show_promoted_object_model?'':'none'}`}>
                    <div className="modal-backdrop fade in"></div>
                    <div id="spaui156393280806218" width="400" type="confirmModal" role="dialog" tabindex="-1" className="tipspop spaui_tipmodal_spaui156393280806218 fade in modal" style={{display: 'block'}}>
                        <div className="modal-dialog" style={{width: '400px', marginLeft: '-200px', marginTop: '-65px', top: '50%', left: '50%', position: 'fixed'}}>
                            <div className="modal-content" role="document">
                                <div className="modal-header">
                                    <button type="button" className="close" onClick={this.handleCancel.bind(this,'promoted_object_model')}><span>×</span></button>
                                </div>
                                <div className="modal-body">
                                    <div>
                                        <p className="s-tit"><strong>修改推广目标</strong></p>
                                        <p>修改推广目标，已填写的广告内容将会被清空</p>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" onClick={this.handleCancel.bind(this,'promoted_object_model')}>取消</button>
                                    <button type="button" className="btn btn-primary" style={{width: '50%'}} onClick={this.handleOk.bind(this,'promoted_object_model',this.state.promoted_object_type_changed)}>确定</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 修改推广版位弹窗 */}
                <div role="dialog" className={`spa-ui ${this.state.show_adcreative_template_model?'':'none'}`}>
                    <div className="modal-backdrop fade in"></div>
                    <div id="spaui156393280806218" width="400" type="confirmModal" role="dialog" tabindex="-1" className="tipspop spaui_tipmodal_spaui156393280806218 fade in modal" style={{display: 'block'}}>
                        <div className="modal-dialog" style={{width: '400px', marginLeft: '-200px', marginTop: '-65px', top: '50%', left: '50%', position: 'fixed'}}>
                            <div className="modal-content" role="document">
                                <div className="modal-header">
                                    <button type="button" className="close" onClick={this.handleCancel.bind(this,'adcreative_template_model')}><span>×</span></button>
                                </div>
                                <div className="modal-body">
                                    <div>
                                        <p className="s-tit"><strong>修改版位</strong></p>
                                        <p>修改版位，已填写的广告内容将会被清空</p>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" onClick={this.handleCancel.bind(this,'adcreative_template_model')}>取消</button>
                                    <button type="button" className="btn btn-primary" style={{width: '50%'}} onClick={this.handleOk.bind(this,'adcreative_template_model',this.state.adcreative_template_changed)}>确定</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ad-process">
                    
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
                            {/* <div className="lump js_sub_container" id="order_subcontainer_campaign_campaign_type">
                                <h3>计划类型</h3>
                                <div className="expand-setting">
                                    <div className="m-input-comp-group layout-justified js-url">
                                        <div className="more-wrap layout-col">
                                            <ul className="layout-justified">
                                                <li className="choose-one-way blk-options ">
                                                    <div className="inner"><label className="m-radiobox noborder"><input type="radio" className="radio" name="campaign_type" value="CAMPAIGN_TYPE_NORMAL" checked={this.state.campaign_type==='CAMPAIGN_TYPE_NORMAL'} onChange={this.handleChange.bind(this)} /><span className="icobox"><span className="ico"></span></span><em>展示广告计划</em></label></div>
                                                </li>
                                                <li className="choose-one-way blk-options">
                                                    <div className="inner"><label className="m-radiobox noborder"><input type="radio" className="radio" name="campaign_type" value="CAMPAIGN_TYPE_SEARCH" checked={this.state.campaign_type==='CAMPAIGN_TYPE_SEARCH'} onChange={this.handleChange.bind(this)}/><span className="icobox"><span className="ico"></span></span><em>搜索广告计划</em></label></div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* 推广目标 */}
                            <div className="lump js_sub_container" id="order_subcontainer_campaign_product_type">
                                <h3>推广目标</h3>
                                <div className={`tipblock error ${this.state.promoted_object_type_error?'':'none'}`}><i className="icon ico-tips-normal"><i></i></i>{this.state.promoted_object_type_error}</div>
                                <div className="">
                                    <ul className="expand-targ">
                                        {
                                            this.state.promoted_object_type_list.map((item,index)=>{
                                                return (
                                                    <li className={this.state.promoted_object_type === item.promoted_object_type ?'active':''}  key={item.promoted_object_type} onClick={this.selectPromotedObjectType.bind(this,item.promoted_object_type)}>
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
                            <div className="btn-line path-btn-line"><button type="button" className={`btn btn-primary ${!this.state.isShowAdgroup?'':'none'}`} onClick={this.createCampaign.bind(this)} disabled={this.state.disabled}>下一步</button></div>
                            <div className={`${this.state.isShowAdgroup?'':'none'}`}>
                                <div className="path path-adset" id="order_container_adgroup">
                                    <div className="inner">
                                        <div className="tab-title">
                                            <h2>广告</h2>
                                        </div>
                                        <div className="plans">
                                            <div className="lump js_sub_container" id="order_subcontainer_adgroup_product">
                                                <h3>目标详情 - 应用ID</h3>
                                                <div className={`m-input-comp select-with-input active fire-hover ${this.state.promoted_object_id_error?'error':''}`}>
                                                    <div className="tit-wrap">
                                                        <p className="name">应用ID{this.state.promoted_object_id_error}</p>
                                                    </div>
                                                    <div className="input-wrap select-input spa-ui">
                                                        <div className="module-selection">
                                                            <div className={`selection-container selection-container-single onseting ${this.state.isShow_promoted_object_list ? 'selection-with-drop' : ''}`} >
                                                                <div className="selection-single">
                                                                    <div className="form-group product-form-group">
                                                                        <input type="text" className={`form-control product-search ${this.state.promoted_object_name!==''?'none':''}`} placeholder="请输入推广的应用ID" name="promoted_object_id" promoted_object_id={this.state.promoted_object_id} onChange={this.handleChange.bind(this)}  onClick={this.showAdgroupProductList.bind(this)} autoComplete="off"/>
                                                                        <div className={`product-form-control ${this.state.promoted_object_name==''?'none':''}`}>
                                                                            <span className="form-control ">
                                                                                <img src={this.state.selected_game_icon} />
                                                                                <span>{this.state.promoted_object_name}</span>
                                                                            </span>
                                                                            <span className="form-control-feedback delall" onClick={this.delall.bind(this)}></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="selection-drop with-icon">
                                                                    <ul className="selection-results product-search-results">
                                                                        {
                                                                            this.state.result_list.map((item,index)=>{
                                                                                return (
                                                                                    <li className="selection-info" key={item.promoted_object_id} onClick={this.selectPromotedObjectId.bind(this,item.promoted_object_spec.app_android_spec.icon,item.promoted_object_id,item.promoted_object_name)}>
                                                                                        <div className="selection-icon" >
                                                                                            <img src={item.promoted_object_spec.app_android_spec.icon} alt="应用图标"/>
                                                                                        </div>
                                                                                        <div className="selection-name">
                                                                                            <p> <span className="id hide">{item.promoted_object_id}</span><span className="name">{item.promoted_object_name}</span></p>
                                                                                        </div>
                                                                                    </li>
                                                                                )
                                                                            })
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="bg-line"></div>
                                                </div>
                                                {/* 渠道包 */}
                                                {this.state.isShowChannelPackageDiv?
                                                    <div className="panel formpanel">
                                                        <div className="m-input-comp fire-hover active ">
                                                            <div className="tit-wrap">
                                                                <p className="name">渠道包</p>
                                                            </div>
                                                            <div className="input-wrap select-input spa-ui">
                                                                <div className="module-selection" id="spaui1563508543123511" style={{width: '100%'}}>
                                                                    <div className={`selection-container selection-container-single with-search ${this.state.isShow_channel_package?'selection-with-drop':''}`}>
                                                                        <a className="selection-single" onClick={this.showPackageList.bind(this)}>
                                                                            <span>{this.state.channel_package_name}</span>
                                                                            <b></b>
                                                                        </a>
                                                                        <div className="selection-drop">
                                                                            <div className="selection-search ">
                                                                                <input type="text" placeholder="搜索" name="searchPackageName" searchPackageName="" onChange={this.handleChange.bind(this)}/></div>
                                                                                <ul className="selection-results" style={{maxHeight: '307px'}}>
                                                                                    {
                                                                                        this.state.channel_package_result_list.map((item,index)=>{
                                                                                            return(
                                                                                                <li className={`selection-info ${this.state.app_android_channel_package_id===item.app_android_channel_package_id?'selected':''}`} onClick={this.selectPackageId.bind(this,item.app_android_channel_package_id,item.package_name)}>
                                                                                                    <div className="selection-name">
                                                                                                        <p>
                                                                                                            <span className="name">{item.package_name}</span>
                                                                                                        </p>
                                                                                                    </div>
                                                                                                </li>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            <div className="bg-line"></div>
                                                        </div>
                                                    </div>
                                                    :
                                                    ''
                                                }
                                            </div>
                                            {/* 定向 */}
                                            <AdTargetingForm
                                                config={stateConfig}

                                                data={targeting}
                                                onChange={this.handleChangeAdTargeting.bind(this)}

                                                errorTips={errorTips}
                                                showError={showError}

                                                checkedFields={checkedFields}
                                                onCheckedChange={this.handleCheckedChange.bind(this)}

                                                showPackage
                                                packageList={packageList}
                                                packageId={packageId}
                                                onPackageIdChange={this.handlePackageIdChange.bind(this)}

                                                fieldsData={{
                                                    behavior_or_interest: {
                                                        // disableSearch: true,
                                                        // 以下四个属性，disableSearch 为 true 时可不传，否则必传
                                                        searchData,
                                                        searchDataPanelOpen,
                                                        onSearch: this.handleBehaviorInterestSearch.bind(this),
                                                        onSearchDataPanelOpenChange: this.handleBehaviorInterestSearchDataOpenChange.bind(this),

                                                        // disableRecommend: true,
                                                        // disableRecommend 为 true 时可不传，否则必传
                                                        recommendData,
                                                        onRecommend: this.handleBehaviorInterestRecommend.bind(this),
                                                    },
                                                    custom_audiences: {
                                                        customAudiencePackages,  // 人群包表格数据
                                                        pageInfo,  // 页码信息
                                                        isCustomSearch: false,  // 是否需要自定义搜索接口及数据，如为false，则自动在当前页数据查找
                                                        // onAutoCompleteChange: this.handleAutoCompleteChange.bind(this), // 搜索框onChange事件回调函数，isCustomSearch不为true时可不传
                                                        // autoCompleteData  // 搜索框下拉列表数据，isCustomSearch不为true时可不传
                                                    }
                                                }}
                                            />
                                            
                                            <div className="tooline"><p className="c-hightlight">推广Android应用，广告只会在Android操作系统上展现</p></div>
                                            <div className="tooline active ">
                                                <label className="m-checkbox">
                                                    <input type="checkbox" className="check" checked={this.state.isSavePackage} disabled={this.state.expand_enabled===true} onChange={this.showPackageName.bind(this)} />
                                                    <span className="ico"></span>
                                                    <em>保存为定向包，下次创建广告直接使用</em>
                                                </label>
                                                <div className={`items ${!this.state.isSavePackage ? 'none':''}`}>
                                                    <div className={`layout-col fire-hover m-input-comp layout-col ${this.state.target_package_name!==''?'active':''}`}>
                                                        <div className="tit-wrap">
                                                            <p className="name"><span>定向包名称</span></p>
                                                            <span className="input-group-addon"><span>
                                                            <span className="">{this.state.target_package_name_length}</span>/15</span></span>
                                                        </div>
                                                        <div className="input-wrap">
                                                            <div className="form-group">
                                                                <input className="form-control" placeholder="请输入定向包名称" name="target_package_name" target_package_name="" onChange={this.handleChange.bind(this)} maxLength='15'/>
                                                            </div>
                                                        </div>
                                                        <div className="bg-line"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tooline clearfix expansion">
                                                <span>
                                                    <span className="has-feedback has-popover">
                                                        <label className="m-checkbox">
                                                                <input type="checkbox" className="check" name="expand_enabled" checked={this.state.expand_enabled} disabled={this.state.isSavePackage===true} onChange={this.showExpandEnabled.bind(this)}/>
                                                            <span className="ico"></span>
                                                            <em>自动扩量</em>
                                                        </label>
                                                        <i className="icon ico-help-sm"><i></i></i>
                                                    </span>
                                                    <span className={`${this.state.expand_enabled?'':'none'}`}>
                                                        <span className="op-block">
                                                            <span className="op-block wd">，可指定不可突破定向</span>
                                                            <i className="icon ico-help-sm"><i></i></i>
                                                        </span>
                                                        <span className="op-block spa-ui">
                                                            <label className="m-checkbox" id="spaui1564044995804392">
                                                                <input type="checkbox" className="check" name="geo_location" disabled={true} value="geo_location"/>
                                                                <span className="ico ico-checked"></span>
                                                                <em className="flex">&nbsp;地域</em>
                                                            </label>
                                                        </span>
                                                        <span className="op-block spa-ui">
                                                            <label className="m-checkbox" id="spaui1564044995594393">
                                                                <input type="checkbox" className="check" name="age" disabled={true} value="age"/>
                                                                <span className="ico ico-checked"></span>
                                                                <em className="flex">&nbsp;年龄</em>
                                                            </label>
                                                        </span>
                                                        <span className="op-block spa-ui">
                                                            <label className="m-checkbox" id="spaui1564044995930394">
                                                                <input type="checkbox" className="check" name="gender" disabled={true} value="gender"/>
                                                                <span className="ico ico-checked"></span>
                                                                <em className="flex">&nbsp;性别</em>
                                                            </label>
                                                        </span>
                                                    </span>
                                                    
                                                </span>
                                            </div>
                                        </div>
                                        {/* 广告版位 */}
                                        <div className="lump js_sub_container" id="order_subcontainer_adgroup_creatives">
                                            <h3>广告版位</h3>
                                            <ul className="nav nav-tabs slider creative-tabs" role="tablist">
                                                <li role="presentation" className="active "><a href="javascript:;" role="tab"><i className="icon ico-mobile"><i></i></i>移动平台</a></li>
                                                <li className="slider" style={{left: '47.5px'}}></li>
                                            </ul>
                                            <div className="tab-content tablepanel">
                                                {/* 响应式去掉nopreview      */}
                                                <div role="tabpanel" className={`tab-pane active ${this.state.isPreview?'':'nopreview'}`}>
                                                    <div className={`tipblock error ${this.state.adcreative_template_error?'':'none'}`}><i className="icon ico-tips-normal"><i></i></i>{this.state.adcreative_template_error}</div>
                                                    <div className="data js_table_container">
                                                        <div className="bootstrap-table">
                                                            <div className="fixed-table-toolbar"></div>
                                                            <div className="fixed-table-container">
                                                                <div className="fixed-table-header js_table_header">
                                                                    <table className="table-child-roll">
                                                                        <tbody>
                                                                            <tr>
                                                                                <th className="cell" data-field="adcreative_template_name" data-sortable="0">
                                                                                    <div className="th-inner">广告版位</div>
                                                                                </th>
                                                                                <th className="means" data-field="adcreative_template_style" data-sortable="0">
                                                                                    <div className="th-inner">
                                                                                        <div className="base-select">
                                                                                            <div className="selection-with-auto spa-ui">
                                                                                                <div className="module-selection" id="spaui15577276696838" style={{width: '100%'}}>
                                                                                                    <div className="selection-container selection-container-single"><a className="selection-single"><span>创意形式</span></a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </th>
                                                                                <th className="des" data-field="adcreative_template_description" data-sortable="0">
                                                                                    <div className="th-inner">描述</div>
                                                                                </th>
                                                                                <th className="nums" data-field="impression" data-sortable="0">
                                                                                    <div className="th-inner">曝光量</div>
                                                                                </th>
                                                                                <th className="up" data-field="action" data-sortable="0">
                                                                                    <div className="th-inner"></div>
                                                                                </th>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div className="fixed-table-body js_table_body">
                                                                    <table className="table table-hover">
                                                                        <tbody>
                                                                            {
                                                                            this.state.creative_template_list.map((item,index)=>{
                                                                                return(
                                                                                    <tr className={this.state.adcreative_template_id===item.adcreative_template_id?'active':''} key={item.adcreative_template_id} onClick={this.selectCreativeTemplate.bind(this,item.adcreative_template_id,item.adcreative_sample_image_list,item.site_set,item)}>
                                                                                        <td className="cell"><i className="icon"><i></i><i className="choosed"></i></i><span title={item.adcreative_template_name}>{item.adcreative_template_name}</span></td>
                                                                                        <td className="means"><span title={item.adcreative_template_size+item.adcreative_template_style}>{item.adcreative_template_size}{item.adcreative_template_style}</span></td>
                                                                                        <td className="des"><span title={item.adcreative_template_description}>{item.adcreative_template_description}</span></td>
                                                                                        <td className="nums align-right">{item.impression}</td>
                                                                                        <td className="up"><i className={`icon ico-slot-up ${item.action==='uped'?'ico-slot-uped':''}`} title={item.action==='uped'?'点击取消置顶此版位':'点击置顶此版位'} onClick={this.showTop.bind(this,item.action,item.adcreative_template_id)}><i></i></i>
                                                                                        </td>
                                                                                    </tr>
                                                                                )
                                                                            }) 
                                                                            }
                                                                            {/* {
                                                                                this.state.creative_template_uped_list.map((item,index)=>{
                                                                                    return(
                                                                                        <tr className={this.state.adcreative_template_id===item.adcreative_template_id?'active':''} key={item.adcreative_template_id} onClick={this.selectCreativeTemplate.bind(this,item.adcreative_template_id,)}>
                                                                                            <td className="cell"><i className="icon"><i></i><i className="choosed"></i></i><span title={item.adcreative_template_name}>{item.adcreative_template_name}</span></td>
                                                                                            <td className="means"><span title={item.adcreative_template_style}>{item.adcreative_template_style}</span></td>
                                                                                            <td className="des"><span title={item.adcreative_template_description}>{item.adcreative_template_description}</span></td>
                                                                                            <td className="nums align-right">{item.impression}</td>
                                                                                            <td className="up"><i className={`icon ico-slot-up ${item.action==='uped'?'ico-slot-uped':''}`} title={item.action==='uped'?'点击取消置顶此版位':'点击置顶此版位'} onClick={this.showTop.bind(this,item.action,item.adcreative_template_id)}><i></i></i>
                                                                                            </td>
                                                                                        </tr>
                                                                                    )
                                                                                })
                                                                            }
                                                                            {
                                                                                this.state.creative_template_up_list.map((item,index)=>{
                                                                                    return(
                                                                                        <tr className={this.state.adcreative_template_id===item.adcreative_template_id?'active':''} key={item.adcreative_template_id} onClick={this.selectCreativeTemplate.bind(this,item.adcreative_template_id,)}>
                                                                                            <td className="cell"><i className="icon"><i></i><i className="choosed"></i></i><span title={item.adcreative_template_name}>{item.adcreative_template_name}</span></td>
                                                                                            <td className="means"><span title={item.adcreative_template_style}>{item.adcreative_template_style}</span></td>
                                                                                            <td className="des"><span title={item.adcreative_template_description}>{item.adcreative_template_description}</span></td>
                                                                                            <td className="nums align-right">{item.impression}</td>
                                                                                            <td className="up"><i className={`icon ico-slot-up ${item.action==='uped'?'ico-slot-uped':''}`} title={item.action==='uped'?'点击取消置顶此版位':'点击置顶此版位'} onClick={this.showTop.bind(this,item.action,item.adcreative_template_id)}><i></i></i>
                                                                                            </td>
                                                                                        </tr>
                                                                                    )
                                                                                })
                                                                            } */}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <ul class="pagination">
                                                                    <li>
                                                                        <button className="btn btn-primary " type="button" href="javascript:;" disabled={this.state.creative_template_page<=1} onClick={this.prePage.bind(this)}>上一页</button>
                                                                    </li>
                                                                    <li class="">
                                                                        <button className="btn btn-primary " type="button" href="javascript:;" disabled={this.state.creative_template_page>=this.state.creative_template_total_page} onClick={this.nextPage.bind(this)}>下一页</button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                    <div className={`preview spa-ui ${this.state.isPreview?'':'none'}`}>
                                                    <Carousel>
                                                        {
                                                            this.state.adcreative_sample_image_list.map((item,index)=>{
                                                                return (
                                                                    <Carousel.Item className="item">
                                                                        <a href="javascript:;">
                                                                            <img  src={item.image} alt={item.name}/>
                                                                        </a>
                                                                    </Carousel.Item>
                                                                )
                                                            })
                                                        }
                                                        
                                                    </Carousel>
                                                
                                                        {/* <div className="carousel slide" id="carousel">
                                                            <ol className="carousel-indicators">
                                                                <li data-target="#carousel" data-slide-to="0" className="active"></li> 
                                                                <li data-target="#carousel" data-slide-to="1" ></li> 
                                                            </ol>
                                                            <div className="carousel-inner">
                                                                {
                                                                    this.state.adcreative_sample_image_list.map((item,index)=>{
                                                                        return (
                                                                            <div className="item active">
                                                                                <a href="javascript:;">
                                                                                    <img src={item.image} alt={item.name} />
                                                                                </a>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                                
                                                                
                                                            </div>
                                                            <a className="carousel-control left" role="button" href="#carousel" data-slide="prev">
                                                                <span className="chevron-left"></span>
                                                                <span className="sr-only">Previous</span>
                                                            </a>
                                                            <a className="carousel-control right" role="button" href="#carousel" data-slide="next">
                                                                <span className="chevron-right"></span>
                                                                <span className="sr-only">Next</span>
                                                            </a>
                                                            <a href="javascript:;" className="enlarge-normal"></a>
                                                        </div> */}
                                                        <div className="carousel-caption-group">
                                                            <div className="carousel-caption">
                                                                <h3>移动原生广告位</h3>
                                                                <p className="tips">(广告可能出现在以上位置)</p>
                                                                <div className="ad-info"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* 排期与出价  */}
                                            <div className="lump js_sub_container" id="order_subcontainer_adgroup_adgroup">
                                                <h3>排期与出价</h3>
                                                <div class={`tipblock error ${this.state.bid_error?'':'none'}`}><i class="icon ico-tips-normal"><i></i></i>{this.state.bid_error} </div>
                                                <ul className="panel formpanel">
                                                    <li className="date general-line">
                                                        <div className="general-line-name">投放日期</div>
                                                        <div className="item-group">
                                                            <ul className="">
                                                                <li className="blk-options">
                                                                    <div className="inner">
                                                                        <div className="m-input-comp fire-click active">
                                                                            <div className="tit-wrap">
                                                                                <label className="m-radiobox noborder">
                                                                                    <input type="radio" className="radio" name="ad_date" value="long_delivery" checked={ this.state.ad_date==="long_delivery"?true:false} onChange={this.handleChange.bind(this)}/>
                                                                                    <span className="icobox">
                                                                                        <span className="ico"></span>
                                                                                    </span>
                                                                                    <em>长期投放</em>
                                                                                </label>
                                                                            </div>
                                                                            <div className="input-wrap spa-ui">
                                                                                <div className="datechoose" id="spaui155867958307316">
                                                                                    <div className="has-feedback input-group input-group-with-addon datesingle">
                                                                                    {this.state.ad_date!='long_delivery'?
                                                                                            ( <span  style={{textAlign:'defalut'}}>开始日期</span> )
                                                                                            :
                                                                                            (<DatePicker defaultValue={moment(currentday, dateFormat )} onChange={this.onChangeLongDeliveryDate.bind(this)}size='small' placeholder="请选择日期" />)
                                                                                        }
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="blk-options">
                                                                    <div className="inner">
                                                                        <div className="m-input-comp fire-click active">
                                                                            <div className="tit-wrap">
                                                                                <label className="m-radiobox noborder">
                                                                                    <input type="radio" className="radio" name="ad_date" value="short_delivery" checked={ this.state.ad_date==="short_delivery"?true:false} onChange={this.handleChange.bind(this)}/>
                                                                                    <span className="icobox">
                                                                                        <span className="ico"></span>
                                                                                    </span>
                                                                                    <em>在某日期范围内投放</em>
                                                                                </label>
                                                                            </div>
                                                                            <div className="input-wrap spa-ui" style={{width:'500px'}}>
                                                                                <div className="datechoose" id="spaui155773737691222">
                                                                                    <div className="has-feedback input-group input-group-with-addon"  style={{width:'500px'}}>
                                                                                        {this.state.ad_date!='short_delivery'?
                                                                                            (<span  style={{textAlign:'defalut'}}>开始日期至结束日期</span>)
                                                                                            :
                                                                                            (<RangePicker defaultValue={[moment(currentday, dateFormat ),moment(currentday, dateFormat )]} onChange={this.onChangeShortDeliveryDate.bind(this)} size='small' placeholder={['开始日期', '结束日期']}/>)
                                                                                        }
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="timeset general-line onseting">
                                                        <div className="general-line-name">投放时间</div>
                                                        <div className="item-group">
                                                            <ul className="">
                                                                <li className="blk-options checked">
                                                                    <div className="inner">
                                                                        <label className="m-radiobox noborder">
                                                                            <input type="radio" className="radio" name="ad_time" value="allTime" checked={this.state.ad_time === 'allTime'?true:false} onChange={this.handleChange.bind(this)} />
                                                                            <span className="icobox">
                                                                                <span className="ico"></span>
                                                                            </span>
                                                                            <em>全天</em>
                                                                        </label>
                                                                    </div>
                                                                </li>
                                                                <li className="blk-options">
                                                                    <div className="inner">
                                                                        <div className="m-input-comp fire-click active">
                                                                            <div className="tit-wrap">
                                                                                <label className="m-radiobox noborder">
                                                                                    <input type="radio" className="radio" name="ad_time" value="partTime" checked={this.state.ad_time === 'partTime'?true:false} onChange={this.handleChange.bind(this)}/>
                                                                                    <span className="icobox">
                                                                                        <span className="ico"></span>
                                                                                    </span>
                                                                                    <em>特定时间段</em>
                                                                                </label>
                                                                            </div>
                                                                            <div className="input-wrap spa-ui">
                                                                                <div className="module-selection" id="spaui155773815660977" style={{width: '100px'}}>
                                                                                    <div className={`selection-container selection-container-single ${this.state.ad_time==='partTime'&&this.state.isStartTime===true?'selection-with-drop':''}`}>
                                                                                        <a className="selection-single"  onClick={this.isShowStartTime.bind(this)}>
                                                                                            <span>{this.state.start_time}</span>
                                                                                            <b></b>
                                                                                        </a>
                                                                                        <div className="selection-drop">
                                                                                            <ul className="selection-results" style={{maxHeight: '307px'}}>
                                                                                                {
                                                                                                    this.state.start_time_list.map((item,index)=>{
                                                                                                        return(
                                                                                                            <li className={`selection-info ${this.state.start_time===item.time?'selected':''} ${this.state.end_time.split(':')[0]<=item.time.split(':')[0]?'disabled':''}`} key={index} onClick={this.selectStartTime.bind(this,item.time)}>
                                                                                                                <div className="selection-name">
                                                                                                                    <p><span className="name">{item.time}</span></p>
                                                                                                                </div>
                                                                                                            </li>
                                                                                                        )
                                                                                                    })
                                                                                                }
                                                                                                
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div><span className="split"></span>
                                                                                <div className="module-selection" id="spaui1557738157048104" style={{width: '100px'}}>
                                                                                    <div  className={`selection-container selection-container-single ${this.state.ad_time==='partTime'&&this.state.isEndTime===true?'selection-with-drop':''}`}>
                                                                                        <a className="selection-single" onClick={this.isShowEndTime.bind(this)}>
                                                                                            <span>{this.state.end_time}</span>
                                                                                            <b></b>
                                                                                        </a>
                                                                                        <div className="selection-drop">
                                                                                            <ul className="selection-results" style={{maxHeight: '307px'}}>
                                                                                                {
                                                                                                    this.state.end_time_list.map((item,index)=>{
                                                                                                        return(
                                                                                                            <li className={`selection-info ${this.state.end_time===item.time?'selected':''} ${this.state.start_time.split(':')[0]>=item.time.split(':')[0]?'disabled':''}`} key={index} onClick={this.selectEndTime.bind(this,item.time)}>
                                                                                                                <div className="selection-name">
                                                                                                                    <p><span className="name">{item.time}</span></p>
                                                                                                                </div>
                                                                                                            </li>
                                                                                                        )
                                                                                                    })
                                                                                                }
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* <a href="javascript:;" className="other-position-ele" >高级设置</a>
                                                        <div className="duration-area none" id="spaui155834640500584">
                                                            <div id='table_time_selected' className="table_time_selected">
                                                                <input type="hidden" className="default_time_val" defaultValue="111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111" readOnly=""></input>
                                                            </div>
                                                            <div className="duration-tipline"><span className="color-box"></span><span>未选</span><span className="color-box color-blue"></span><span>已选</span><span className="weektip">可拖动鼠标选择时间段</span><a className="emptied clear" style={{cursor: 'pointer'}}>清空</a></div>
                                                        </div> */}
                                                    </li>
                                                    <li className={`bid general-line`}>
                                                        <div className="li costtype">
                                                            <div className="general-line-name">出价方式</div>
                                                            <div className="item-group">
                                                                <ul className="">
                                                                    <li className="blk-options">
                                                                        <div className="inner">
                                                                            <label className="m-radiobox noborder">
                                                                                <input type="radio" className="radio" name="bid_method" value="CPC" checked={this.state.bid_method === 'CPC'?true:false} onChange={this.handleChange.bind(this)}/>
                                                                                <span className="icobox">
                                                                                    <span className="ico"></span>
                                                                                </span>
                                                                                <em>CPC</em>
                                                                            </label>
                                                                        </div>
                                                                    </li>
                                                                    <li className="blk-options">
                                                                        <div className="inner">
                                                                            <label className="m-radiobox noborder">
                                                                                <input type="radio" className="radio" name="bid_method" value="CPM" checked={this.state.bid_method === 'CPM'?true:false} onChange={this.handleChange.bind(this)}/>
                                                                                <span className="icobox">
                                                                                    <span className="ico"></span>
                                                                                </span>
                                                                                <em>CPM</em>
                                                                            </label>
                                                                        </div>
                                                                    </li>
                                                                    <li className="blk-options">
                                                                        <div className="inner">
                                                                            <label className="m-radiobox noborder">
                                                                            <input type="radio" className="radio" name="bid_method" value="oCPA" checked={this.state.bid_method === 'oCPA'?true:false} onChange={this.handleChange.bind(this)}/>
                                                                                <span className="icobox">
                                                                                    <span className="ico"></span>
                                                                                </span>
                                                                                <em>oCPA</em>
                                                                            </label>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className={`li goal onlyinput onseting ${this.state.bid_method === 'oCPA'?'':'none'}`}>
                                                            <div className="m-input-comp fire-hover active"  onClick={this.showOptimizationGoal.bind(this)}>
                                                                <div className="tit-wrap">
                                                                    <p className="name">
                                                                        <p className="name">优化目标<i className="icon ico-help-sm"><i></i></i></p>
                                                                    </p>
                                                                </div>
                                                                <div className="input-wrap select-input spa-ui">
                                                                    <div className="module-selection" id="spaui1563866804916133" style={{width: '100%'}}>
                                                                        <div className={`selection-container selection-container-single onseting  ${this.state.isShowOptimizationGoal?'selection-with-drop':''}` }>
                                                                            <a className="selection-single"><span>{this.state.optimization_goal_name}</span><b></b></a>
                                                                            <div className="selection-drop">
                                                                                <ul className="selection-results" style={{maxheight: '307px'}}>
                                                                                    {
                                                                                        this.state.optimization_goal_list.map((item,index)=>{
                                                                                            return (
                                                                                                <li className={`selection-info ${this.state.optimization_goal===item.value?'selected':''}`} onClick={this.selectOptimizationGoal.bind(this,item.value,item.name)}>
                                                                                                    <div className="selection-name">
                                                                                                        <p><span className="name">{item.name}</span></p>
                                                                                                    </div>
                                                                                                </li>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bg-line"></div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="general-line onlyinput">
                                                        {/* 错误加  error */}
                                                        <div className={`layout-col fire-hover active m-input-comp ${this.state.bid_amount_error?'error':''} `}>
                                                            <div className="tit-wrap">
                                                                <p className="name">
                                                                    <span>出价{this.state.bid_amount_error}</span> 
                                                                </p>
                                                                <span class={`input-group-addon ${this.state.bid_method === 'oCPA'?'':'none'}`}>元/激活</span>
                                                                <span className={`input-group-addon ${this.state.bid_method === 'oCPA'?'none':''}`}>
                                                                    <span className={`${this.state.suggest_min_bid_amount?'':'none'}`}>
                                                                        <span>建议出价<strong className="c-hightlight">{this.state.suggest_min_bid_amount}~{this.state.suggest_max_bid_amount}</strong>元/点击  </span>
                                                                    </span>
                                                                    {/* <button onClick={this.getEstimation.bind(this)} className={`btn btn-primary btn-small`}>点击获取建议出价</button> */}
                                                                </span>
                                                            </div>
                                                            {/* <div className={`input-wrap ${this.state.bid_method === 'oCPA'?'':'none'}`}>
                                                                <div className="form-group">
                                                                    <input className="form-control" placeholder="输入价格" name="bid_amount" bid_amount="" onChange={this.handleChange.bind(this)} autoComplete="off" style={{width:'80%'}}/>
                                                                </div>
                                                            </div> */}
                                                            <div className={`input-wrap`}>
                                                                <div className="form-group">
                                                                    <input className="form-control" placeholder="输入价格" name="bid_amount" bid_amount="" onChange={this.handleChange.bind(this)} autoComplete="off" style={{width:'80%'}} onFocus={this.getEstimation.bind(this)}/>
                                                                </div>
                                                            </div>
                                                            <div className="bg-line"></div>
                                                        </div>
                                                    </li>
                                                    <li className={`general-line ${this.state.bid_method === 'oCPA'?'':'none'}`}>
                                                        <div className="general-line-name">计费方式<i className="icon ico-help-sm"><i></i></i></div>
                                                        <div className="item-group">
                                                            <ul className="">
                                                                <li className="blk-options checked">
                                                                    <div className="inner">
                                                                        <label className="m-radiobox noborder">
                                                                            <input type="radio" className="radio" name="billing_event" value="BILLINGEVENT_CLICK" checked={this.state.billing_event==='BILLINGEVENT_CLICK'} onChange={this.handleChange.bind(this)} />
                                                                            <span className="icobox">
                                                                                <span className="ico"></span>
                                                                            </span>
                                                                            <em>点击次数</em>
                                                                        </label>
                                                                    </div>
                                                                </li>
                                                                <li className="blk-options">
                                                                    <div className="inner">
                                                                        <label className="m-radiobox noborder">
                                                                            <input type="radio" className="radio" name="billing_event" value="BILLINGEVENT_IMPRESSION" checked={this.state.billing_event==='BILLINGEVENT_IMPRESSION'} onChange={this.handleChange.bind(this)}/>
                                                                            <span className="icobox">
                                                                                <span className="ico"></span>
                                                                            </span>
                                                                        <em>展示次数</em>
                                                                    </label>
                                                                </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="general-line onlyinput"></li>
                                                </ul>
                                                <div className={`layout-col fire-hover active m-input-comp ${this.state.adgroup_name_error?'error':''}`}>
                                                    <div className="tit-wrap">
                                                        <p className="name">
                                                            <span>广告名称{this.state.adgroup_name_error}</span>
                                                        </p>
                                                        {/* <span className="input-group-addon"><span><span className="">23</span>/40</span></span> */}
                                                    </div>
                                                    <div className="input-wrap">
                                                        <div className="form-group">
                                                            <input className="form-control" placeholder="广告名称仅用于管理广告，不会对外展示" name="adgroup_name" value={this.state.adgroup_name} onChange={this.handleChange.bind(this)} autoComplete="off"/>
                                                        </div>
                                                    </div>
                                                    <div className="bg-line"></div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="btn-line path-btn-line"><button type="button" className={`btn btn-primary ${!this.state.isShowAdCreative?'':'none'}`} onClick={this.showAdCreative.bind(this)}>下一步</button></div>
                                        {/* 创意 */}
                                        <div className={`${this.state.isShowAdCreative?'':'none'}`}>
                                            <div className="tsaui">
                                                <AdCreativeForm
                                                    template={template}
                                                    config={this.config}

                                                    data={adcreative_elements}
                                                    onChange={this.handleChangeAdcreative.bind(this)}

                                                    showError={showError}
                                                    errorTips={errorTips}
                                                    onErrorTipsChange={this.handleErrorTipsChange.bind(this)}
                                                    validateField={AdcreativeValidateField.bind(this)}
                                                   
                                                    onMediaUploadComplete={this.handleMediaUploadComplete.bind(this)}
                                                    onMediaUploadError={this.handleMediaUploadError}

                                                    getMediaUrlById={this.getMediaUrlById.bind(this)}
                                                    onGetMediaUrlError={this.handleGetMediaUrlError.bind(this)}

                                                    genMediaUploadParams={this.genMediaUploadParams.bind(this)}

                                                    onCheckMediaError={this.handleCheckMediaError.bind(this)}

                                                    // getMediaUploaderAddOnConfig={this.getMediaUploaderAddOnConfig}//从创意库中

                                                    // getImageProcessingAddOnConfig={this.getImageProcessingAddOnConfig}
                                                />
                                                <div className="lump">
                                                    <div className="expand-setting">
                                                        <div className={`layout-col fire-hover  m-input-comp active ${this.state.design_id_error?'error':''}`}>
                                                            <div className="tit-wrap">
                                                                <p className="name"><span>批量创建数量{this.state.design_id_error}</span></p>
                                                            </div>
                                                            <div className="input-wrap">
                                                                <div className="form-group">
                                                                    <input className="form-control" placeholder="请输入批量创建数量" name="batch_num" batch_num="" defaultValue="1" onChange={this.handleChange.bind(this)} autocomplete="off"/>
                                                                </div>
                                                            </div>
                                                            <div className="bg-line"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="btn-line path-btn-line">
                                                    <div id="show-loading" style={{ color: 'red' }}></div>
                                                    <button type="button" className="btn btn-primary" onClick={this.submitForm.bind(this)} disabled={this.state.disabled}>提交</button>
                                                </div>
                                            </div>
                                            
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
    
    // 定向
    componentDidMount() {
        
        this.setState({
            account_id:this.getQueryVariable('account_id'),
        },()=>{
            if(!this.state.account_id){
                this.setState({
                    hide:true
                })
                return
            }
            axios({
                method:'get',
                url:host +'/custom_audiences/get',
                params:{
                    account_id:this.state.account_id,//当前操作账号
                }
            })
            .then((res)=>{
                const custom_audience_data = res.data
                customAudiencePackages = {
                    custom_audience: custom_audience_data.data.list,
                    excluded_custom_audience: custom_audience_data.data.list
                }
                this.setState({
                    customAudiencePackages,
                })
            })
            .catch((error)=>{
                console.log('axios 获取数据失败'+error)
            })
        })
        
        const { config: stateConfig } = this.state;
        // 获取地域定向类目数据
        let regionData = {},
            businessDistrictData = {};

        regionData = targetingTagsMock.geo_location_region.data.list;
        businessDistrictData = targetingTagsMock.geo_location_business_district.data.list;
        const list = regionData.concat(businessDistrictData);
        let newConfig = addTreeSelectorsConfig(stateConfig, {
            geo_location: list
        });

        // 获取行为兴趣定向类目数据
        let interestData = {},
            behaviorData = {};
            interestData = targetingTagsMock.interest_common.data.list;
            behaviorData = targetingTagsMock.behavior_common.data.list;
            newConfig = addTreeSelectorsConfig(stateConfig, { interest: interestData, behavior: behaviorData });
        // 获取人群包列表
        let customAudiencePackages={};

        
        
        // 获取微信公众号类型和移动媒体类型定向类目数据
        let wechatOfficialAccountCategoryData = {},
            mobileUnionCategoryData = {};
        wechatOfficialAccountCategoryData = targetingTagsMock.wechat_official_account_category.data.list;
        mobileUnionCategoryData = targetingTagsMock.mobile_union_category.data.list;

        newConfig = addTreeSelectorsConfig(stateConfig, {
            wechat_official_account_category: wechatOfficialAccountCategoryData,
            mobile_union_category: mobileUnionCategoryData
        });

        this.setState({
            config: newConfig,
        });
    }

    handleChangeAdTargeting(_fieldName, targeting) {
        const { showError, targeting: stateData, errorTips } = this.state;
        const newData = Object.assign({}, stateData);
        const newErrorTips = Object.assign({}, errorTips);
        let fieldName = _fieldName;
        newData[fieldName] = targeting;
        
        let error;
        // 注意：自定义人群验证需特殊处理
        // custom_audience 定向和 excluded_custom_audience 定向统一放在了 custom_audiences 字段配置之下，需一起验证
        if (['custom_audience', 'excluded_custom_audience'].includes(fieldName)) {
            error = validateField({
                custom_audience: newData.custom_audience,
                excluded_custom_audience: newData.excluded_custom_audience
            }, targetingConfig.targeting_fields.custom_audiences);

            fieldName = 'custom_audiences';
        } else {
            error = validateField(targeting, targetingConfig.targeting_fields[fieldName]);
        }
        if (error) {
            newErrorTips[fieldName] = error;
        } else {
            delete newErrorTips[fieldName];
        }

        this.setState({
            targeting: newData,
            errorTips: newErrorTips
        });
    }

    handleCheckedChange(key) {
        const { checkedFields: oldCheckedFields } = this.state;
        const checkedFields = Object.assign([], oldCheckedFields);
        const index = checkedFields.indexOf(key);
        if (index > -1) {
            checkedFields.splice(index, 1);
        } else {
            checkedFields.push(key);
        }

        this.setState({
            checkedFields
        });
    }
    handlePackageIdChange(event, value) {
        let newData = {},
            newState = {
                packageId: value,
                errorTips: {},
                showError: false,
                targeting: {},
                checkedFields: []
            };

        // 选择已有定向，回填表单数据
        if (value !== -1) {
            packageList.forEach((item) => {
                if (item.targeting_id === value) {
                    newData = item.targeting;
                }
            });

            // 回填定向包数据
            newState.targeting = newData;
            newState.checkedFields = Object.keys(newData);
        }
        this.setState(newState);
    }
    handleSubmit() {
        const { targeting, checkedFields } = this.state;
        const errorTips = validateTargeting(targeting, targetingConfig.targeting_fields, checkedFields);
        console.log(errorTips)
        // 过滤一下未被选择的定向
        // 注意：自定义人群验证需特殊处理 (custom_audience 定向和 excluded_custom_audience 定向统一放在了 custom_audiences 字段配置之下)
        for (let name in targeting) {
            let checkName = name
            if (['custom_audience', 'excluded_custom_audience'].includes(checkName)) {
                checkName = 'custom_audiences'
            }

            if (!checkedFields.includes(checkName)) {
                delete targeting[checkName]
            }
        }

        console.log('表单数据：');
        console.log(targeting);

        this.setState({
            errorTips,
            showError: true
        });
    }
    /**
     * 行为兴趣搜索关键词 （disableSearch 为 true 时可不定义，见 render 函数注释）
     *
     * @param {string} name 字段名
     * @param {string} searchValue 输入的搜索内容
     * @param {array} chosenList 已选中的标签
     */
    handleBehaviorInterestSearch = (name, searchValue, chosenList = []) => {
        let searchResultMock = {};

        const setSearchData = (result = [], searchDataOpen = false) => {
            let searchData = {};

            // searchData的一项需有value和label两个属性
            searchData[name] = result.map((item) => {
                return {
                    value: item.name,
                    label: item.name
                };
            });

            this.setState({
                searchData,
                searchDataOpen
            });
        };

        // 兴趣搜索
        if (name === 'interest') {
            /**
             * Mock API /targeting_tags/get 接口返回数据
             * 请求参数示例：
             * {
             *     type: 'INTEREST',
             *     tag_spec: {
             *          interest_spec: {
             *          query_mode: 'TARGETING_TAG_QUERY_MODE_SEARCH',
             *          query_spec: {
             *               query: encodeURIComponent(searchValue),
             *               excluding_targeting_tags: chosenList
             *          }
             *     }
             *  }
             */
            searchResultMock = targetingTagsMock.interest_search;
            // 行为搜索
        } else {
            /**
             * Mock API /targeting_tags/get 接口返回数据
             * 请求参数示例：
             * {
             *     type: 'BEHAVIOR',
             *     tag_spec: {
             *          behavior_spec: {
             *          query_mode: 'TARGETING_TAG_QUERY_MODE_SEARCH',
             *          query_spec: {
             *               query: encodeURIComponent(searchValue),
             *               excluding_targeting_tags: chosenList
             *          }
             *     }
             *  }
             */
            searchResultMock = targetingTagsMock.behavior_search;
        }

        if (searchValue) {
            // MOCK 搜索标签接口返回
            setSearchData(searchResultMock.data.list, true);
        } else {
            setSearchData();
        }
    }


    /**
     * 行为兴趣推荐词需更新回调 （disableRecommend 为 true 时可不定义，见 render 函数注释）
     *
     * @param {string} name 字段名
     * @param {string} recommandValue 需获取推荐词的内容
     * @param {array} chosenList 已选中的标签
     */
    handleBehaviorInterestRecommend = (name, recommandValue, chosenList = []) => {

        const setRecommendData = (result = []) => {
            let recommendData = {};
            recommendData[name] = result.map((item) => {
                // recommendData的一项需有value和label两个属性
                return {
                    value: item.name,
                    label: item.name
                }
            });

            this.setState({
                recommendData
            });
        };

        let recommendResultMock = {};

        if (recommandValue) {
            // 兴趣推荐
            if (name === 'interest') {
                /**
                 * Mock API /targeting_tags/get 接口返回数据
                 * 请求参数示例：
                 * {
                 *     type: 'INTEREST',
                 *     tag_spec: {
                 *          interest_spec: {
                 *          query_mode: 'TARGETING_TAG_QUERY_MODE_RECOMMEND',
                 *          query_spec: {
                 *               query: encodeURIComponent(searchValue),
                 *               excluding_targeting_tags: chosenList
                 *          }
                 *     }
                 *  }
                 */
                recommendResultMock = targetingTagsMock.interest_recommend;
                // 行为推荐
            } else {
                /**
                 * Mock API /targeting_tags/get 接口返回数据
                 * 请求参数示例：
                 * {
                 *     type: 'BEHAVIOR',
                 *     tag_spec: {
                 *          behavior_spec: {
                 *          query_mode: 'TARGETING_TAG_QUERY_MODE_RECOMMEND',
                 *          query_spec: {
                 *               query: encodeURIComponent(searchValue),
                 *               excluding_targeting_tags: chosenList
                 *          }
                 *     }
                 *  }
                 */
                recommendResultMock = targetingTagsMock.interest_recommend;
            }
            setRecommendData(recommendResultMock.data.list, true);
        } else {
            setRecommendData();
        }
    }

    /**
     * 行为兴趣关键词搜索下拉框展开/收起回调 （disableSearch 为 true 时可不定义，见 render 函数注释）
     * @param {object} event 事件对象
     * @param {string} name 操作字段名(interest/behavior)
     * @param {boolean} open 是否展开
     */
    handleBehaviorInterestSearchDataOpenChange(event, name, open) {
        const { searchDataPanelOpen } = this.state;
        let result = Object.assign({}, searchDataPanelOpen, { [name]: open });
        this.setState({
            searchDataPanelOpen: result
        })
    }
    

    // /**
    //  * 搜索输入框onChange事件回调
    //  * @param {string} name 变动的字段名 (custom_audience or excluded_custom_audience)
    //  * @param {string} value 输入框文本值
    //  */
    // handleAutoCompleteChange(name, value) {
    //     // MOCK 模拟请求接口拉取搜索数据
    //     let autoCompleteData = autoCompleteData1;
    //     if (this.searchNum % 2 === 0) {
    //         autoCompleteData = autoCompleteData2;
    //     }
    //     this.searchNum++;

    //     this.setState({
    //         autoCompleteData
    //     })
    // }

    // 创意
    handleChangeAdcreative = (adcreative_elements) => {
        this.setState({
            adcreative_elements
        });
    }

    handleErrorTipsChange = (errorTips) => {
        this.setState({
            errorTips
        });
    }

    // 自定义媒体上传接口附带参数
    genMediaUploadParams = (path, fieldConfig) => {
        return {
            account_id: this.getQueryVariable('account_id'),
            upload_type:'UPLOAD_TYPE_FILE',
        }
    }

    // 自定义媒体上传接口返回后数据的处理
    // 如果要使用图片智能裁剪功能，建议接口返回中带上如下参数：
    // 1. “是否经过智能裁剪”的标识，例如 is_smart_cropped = true
    // 2. 媒体元素值，如 image_id = 123456
    // 3. 若返回的图片是经过智能裁剪的，返回其原始图片值和url，如 origin_image_id = 666666，origin_image_url = 'http://xxxx' (用于对原始图片进行裁剪)
    handleMediaUploadComplete = (resp, path, fieldConfig, inputDOM) => {
        const { element_type } = fieldConfig;
        
        return new Promise((resolve, reject) => {
            if (resp.code === 0 && resp.data) {
                let mediaId;
                if (element_type === 'ELEMENT_TYPE_IMAGE') {
                    mediaId = resp.data.image_id;
                    url = resp.data.preview_url ||''
                } else {
                    mediaId = resp.data.list.video_id;
                    url = resp.data.list.preview_url || ''
                }
                // if (this.config.hasMediaId === false) {
                //     resolve({ value: resp.data.preview_url || '' })
                // } else {
                //     resolve({ value: mediaId, url: resp.data.preview_url || '' })
                // }
                console.log({ value: mediaId, url: url })
                resolve({ value: mediaId, url: url })
                
            } else {
                console.log('In function handleMediaUploadComplete: ' + path + ' 字段媒体上传失败，使用mock数据');
            }
        })
    }
    // 处理媒体上传接口错误
    handleMediaUploadError = (path, errorMsg, resp, fieldConfig) => {

        // demo调试
        console.log('In function handleMediaUploadError: ' + path + ' 字段媒体上传失败(' + errorMsg + '), 接口返回如下:');
        console.log(resp);
    }
    
    
    // 自定义根据媒体ID获取媒体url的操作
    getMediaUrlById = (mediaId, fieldConfig) => {
        console.log(mediaId)
        // console.log('In function getMediaUrlById: Mock 接口返回');
        // console.log(videos_get_resp, images_get_resp)
        return new Promise((resolve, reject) => {
            if (mediaId) {
                // if (fieldConfig.element_type === 'ELEMENT_TYPE_IMAGE') {
                //     let param={}
                //     const data = images_get_resp.data || {}
                //     // // mock 裁剪的图片URL
                //     // if (mediaId === '5947796') {
                //     //     data = custom_cropped_images_get_resp.data || {}
                //     // } else {
                //     //     data = images_get_resp.data || {}
                //     // }
                //     const list = data.list || []
                //     const img = list[0] || {}
                //     const url = img.preview_url || ''
                //     resolve(url);
                // }
                // else if (fieldConfig.element_type === 'ELEMENT_TYPE_VIDEO') {
                //     const data = videos_get_resp.data || {}
                //     const url = data.preview_url || ''
                //     resolve(url);
                // }
                if (fieldConfig.element_type === 'ELEMENT_TYPE_IMAGE') {
                    axios({
                        method:'get',
                        url:host +'/images/get',
                        params:{
                            account_id:this.state.account_id,//当前操作账号
                        }
                    })
                    .then((data)=>{
                        let url = _.get(data, 'data[0].preview_url')
                        resolve(url);
                    })
                    .catch((error)=>{
                        console.log('axios 获取数据失败'+error)
                    })
                } else if(fieldConfig.element_type === 'ELEMENT_TYPE_VIDEO') {
                    axios({
                        method:'get',
                        url:host +'/videos/get',
                        params:{
                            account_id:this.state.account_id,//当前操作账号
                        }
                    })
                    .then((data)=>{
                        let url = _.get(data, 'data[0].preview_url')
                        resolve(url);
                    })
                    .catch((error)=>{
                        console.log('axios 获取数据失败'+error)
                    })
                }
            } else {
                reject(new Error('no media id found'));
            }
        });
    }

    // 处理根据媒体ID获取媒体url接口错误
    handleGetMediaUrlError = (path, errorMsg, resp, fieldConfig) => {

        // demo调试
        console.log('In function handleGetMediaUrlError: ' + path + ' 字段媒体URL获取失败(' + errorMsg + '), 接口返回如下:');
        console.log(resp);
    }

    // 处理默认媒体上传前检查不通过返回
    handleCheckMediaError = (path, errorMsg, fieldConfig) => {

        // demo调试
        alert(path + ' 字段媒体文件检查失败(' + errorMsg + ')');
    }

    // 表单提交回调
    handleSubmit = () => {
        const { adcreative_elements, template } = this.state;

        // validate the form
        let errorTips = validateCreative(adcreative_elements, template);
        this.setState({
            errorTips,
            showError: true
        });

        // demo调试
        console.log('demo演示，表单数据：');
        console.log(adcreative_elements);
    }

    getImageProcessingAddOnConfig = (mediaFieldConfig) => {
        const config = {}

        if (mediaFieldConfig.element_type === 'ELEMENT_TYPE_IMAGE') {
            config.ImageProcessing = ImageProcessing
        }
       
        return config
    }
     // 返回某个媒体元素上传框 Addon 配置
     getMediaUploaderAddOnConfig = (mediaFieldConfig) => {
        const config = {}

        if (mediaFieldConfig.element_type === 'ELEMENT_TYPE_IMAGE') {
            config.addOnText = '从创意库选择图片'
            config.MediaLibrary = MediaLibrary
        } else if (mediaFieldConfig.element_type === 'ELEMENT_TYPE_VIDEO') {
            config.addOnText = '从创意库选择视频'
            config.MediaLibrary = MediaLibrary
        }
       
        return config
    }
}


// 自定义媒体上传/选择组件
class MediaLibrary extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: props.data || ''
        }
    }

    handleSubmit = () => {
        // 组件会接受四个属性，setMediaValue用于回传媒体字段值，onClose用于关闭浮层，config是该字段的配置，data是该字段的值
        const { setMediaValue, onClose, config, data } = this.props

        // 注意，组件需要回传当前媒体字段的值
        setMediaValue(this.state.value)
        
        onClose();
    }

    render() {
        return (
            <div className="media-library-dialog">
                <label htmlFor="media_value" className="media-library-label" style={{ margin: '20px' }}>请输入媒体字段值</label>
                <input type="text" id="media_value" value={this.state.value} className="media-library-input" onChange={(e) => this.setState({ value: e.target.value })} />
                <button onClick={this.handleSubmit} style={{ margin: '20px' }}>确定</button>
            </div>
        )
    }
}
//图片裁剪
class ImageProcessing extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            src: props.src || ''
        };

        this.clipData = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getRestrictionSize() {
        const { config = {} } = this.props;
        const { restriction = {} } = config
        const { width, height } = restriction.image_restriction || {}
        return {
            width,
            height
        }
    }

    handleSubmit = (e, clipData = {}) => {
        // 获取提交时的图片裁剪信息
        console.log(clipData);

        // 组件会接受四个属性，setMediaValue用于回传媒体字段值，onClose用于关闭浮层，config是该字段的配置，data是该字段的值
        const { setMediaValue, onClose, config, data, setShowSmartCropped } = this.props

        // absTopLeftX: 裁剪框左上角点在原图的横坐标, absTopLeftY: 裁剪框左上角点在原图的纵坐标, absScale: 图片缩放比例
        // clipWidth: 裁剪宽度, clipHeight: 裁剪高度
        const { absTopLeftX, absTopLeftY, absScale, clipWidth, clipHeight } = clipData;
        /**
         * Mock API /image_processing/add 接口返回数据
         * 请求参数示例：
         * {
         *     image_id: 5886156,
         *     operation_type: 'OPERATION_TYPE_CROP_CUSTOMIZED_AND_RESIZE',
         *     operation_spec: {
         *          crop_customized_spec_and_resize: {
         *              crop_width: Math.floor(clipWidth / absScale),     // demo 示例值为 470, 以下注释同
         *              crop_height:  Math.floor(clipHeight / absScale),   // 231
         *              axis_x: Math.floor(absTopLeftX),   // 25
         *              axis_y: Math.floor(absTopLeftY),    // 553
         *              resize_width: Math.floor(clipWidth),  // 525
         *              resize_height: Math.floor(clipHeight)  // 258
         *          }
         *     }
         *  }
         */

        // 关闭弹窗，并模拟loading提示
        onClose();
        document.getElementById('show-loading').innerHTML = '图片裁剪中...';

        setTimeout(() => {
            const mockData = custom_cropped_images_add_resp.data;

            // 组件需要回传当前媒体字段的值，更新后会自动关闭弹窗
            setMediaValue(mockData.image_id);

            // 取消智能裁剪标志
            setShowSmartCropped(false);

            // 模拟关闭loading提示
            document.getElementById('show-loading').innerHTML = '';

        }, 2000);
    }

    render() {
        const { onClose, originUrl } = this.props;
        const { width, height } = this.getRestrictionSize();
     
        return (
            <div className="mktui-image-clipper-tool">
                <ImageClipper
                    src={originUrl}
                    clipWidth={width}
                    clipHeight={height}
                    onSubmit={this.handleSubmit}
                    onClose={onClose}
                />
            </div>
        );
    }
}

// export default Inprocess;



render(<AdProduct/>, document.getElementById('Adcreative'));
