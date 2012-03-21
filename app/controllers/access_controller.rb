class AccessController < ApplicationController

  def validate_license_key
    @result = true
  end

  private
  
  MAX_COMMENTS_PER_DISH = 10
  
  def identify_tablet
    @tablet = Tablet.where("access_key = ? AND active = ?", params[:key], true).first
    #@tablet = Tablet.find(:first, :conditions => { :access_key => params[:key] , :active => true })
    if @tablet.nil?
      render :text => "You dont have access with this license.", :status => :forbidden
    else
      @table = @tablet.table
      @restaurant = @table.restaurant
    end
  end
  
  def setup_language
    params[:locale] = @restaurant.restaurant_setting.default_language if (params[:locale].nil?)
    I18n.locale = params[:locale]
  end
  
  def setup_sencha_friendly_json
    ActiveRecord::Base.include_root_in_json = false
  end
  
  def validate_params(args_array)
    args_array.each{|arg|
      raise ArgumentError, "Falta pasar el parametro '#{arg}' en la peticion" unless params.keys.include? arg
    }
  end
  
  def setup_activity(activity)
    # convert activity into hash
    activityHash = activity.attributes
    activityHash["table_number"] = activity.table_number
    activityHash["date"] = activity.date
    if !activity.order.nil?
      # setup the order
      activityHash["order"] = activity.order.attributes
      activityHash["order"]["order_items"] = []
      activity.order.order_items.each{ |order_item|
        orderItemHash = order_item.attributes
        orderItemHash["item_name"] = order_item.dish.name
        activityHash["order"]["order_items"] << orderItemHash
      }
    end
    #spanish_time = Chronic18n.parse(activity[:date], :es)
    #activity[:date] = spanish_time if !spanish_time.nil?
    return activityHash.to_json
  end
  
  def sort_and_filter(items,sort_attr,filter_attr,reverse_sort,limit)
    sort_attr = sort_attr || :position
    filter_attr = filter_attr || :active
    items.sort_by!{|item|
      item_position = 0
      item_position = item[sort_attr] if item[sort_attr].is_a?(Numeric)
    }
    items.reject!{|item| !item[filter_attr]}
    if !reverse_sort.nil? and reverse_sort==true
      items.reverse!
    end
    if !limit.nil?
      items.slice!(limit..-1)
    end
  end
  
end
