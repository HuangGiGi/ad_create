export default{
    validate(form) {
        console.log('form: ', form);
        if(form.hasOwnProperty('promoted_object_type') && (form['promoted_object_type'] == null || form['promoted_object_type'] == '')) {
            return {promoted_object_type_error: '选择一个推广目标'};
        }

        if(form.hasOwnProperty('daily_budget')) {
            if(form['daily_budget'] == null || form['daily_budget'] == '') {
                return {daily_budget_error: '不能为空'};
            } else if(!/^[0-9]+.?[0-9]*/.test(form['daily_budget'])) {
                return {daily_budget_error: '仅支持不低于50的整数'};
            } else if(parseInt(form['daily_budget']) <= 50 || parseInt(form['daily_budget']) >= 4000000) {
                return {daily_budget_error: '超出范围50-4000000'};
            }
        }

        if(form.hasOwnProperty('channel_ad_id') && (form['channel_ad_id'] == null || form['channel_ad_id'] == '')) {
            return {channel_ad_id_error: '不能为空'};
        }

        if(form.hasOwnProperty('design_id') && (form['design_id'] == null || form['design_id'] == '')) {
            return {design_id_error: '不能为空'};
        }

        if(form.hasOwnProperty('campaign_name') && (form['campaign_name'] == null || form['campaign_name'] == '')) {
            return {campaign_name_error: '不能为空'};
        }

        if(form.hasOwnProperty('promoted_object_id') && (form['promoted_object_id'] == null || form['promoted_object_id'] == '')) {
            return {promoted_object_id_error: '不能为空'};
        }

        if(form.hasOwnProperty('adcreative_template_id') && (form['adcreative_template_id'] == null || form['adcreative_template_id'] == '')) {
            return {adcreative_template_error: '请选择要投放的版位'};
        }

        if(form.hasOwnProperty('bid_amount') && (form['bid_amount'] == null || form['bid_amount'] == '')) {
            return {bid_amount_error: '不能为空'};
        }

        if(form.hasOwnProperty('adgroup_name') && (form['adgroup_name'] == null || form['adgroup_name'] == '')) {
            return {adgroup_name_error: '不能为空'};
        }

        return true;
    }

}
