# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130321174159) do

  create_table "chains", :force => true do |t|
    t.integer   "user_id"
    t.string    "name"
    t.timestamp "created_at",          :null => false
    t.timestamp "updated_at",          :null => false
    t.string    "logo_file_name"
    t.string    "logo_content_type"
    t.integer   "logo_file_size"
    t.timestamp "logo_updated_at"
    t.string    "email"
    t.string    "address"
    t.text      "note"
    t.string    "i18nbg_file_name"
    t.string    "i18nbg_content_type"
    t.integer   "i18nbg_file_size"
    t.datetime  "i18nbg_updated_at"
    t.string    "bg_file_name"
    t.string    "bg_content_type"
    t.integer   "bg_file_size"
    t.datetime  "bg_updated_at"
  end

  add_index "chains", ["user_id"], :name => "index_chains_on_user_id"

  create_table "clients", :force => true do |t|
    t.integer   "user_id"
    t.string    "name"
    t.timestamp "created_at", :null => false
    t.timestamp "updated_at", :null => false
  end

  add_index "clients", ["user_id"], :name => "index_clients_on_user_id"

  create_table "combo_type_translations", :force => true do |t|
    t.integer   "combo_type_id"
    t.string    "locale"
    t.string    "name"
    t.text      "description"
    t.timestamp "created_at",    :null => false
    t.timestamp "updated_at",    :null => false
  end

  add_index "combo_type_translations", ["combo_type_id"], :name => "index_combo_type_translations_on_combo_type_id"
  add_index "combo_type_translations", ["locale"], :name => "index_combo_type_translations_on_locale"

  create_table "combo_types", :force => true do |t|
    t.integer   "restaurant_id"
    t.string    "name"
    t.boolean   "active"
    t.integer   "position"
    t.decimal   "price"
    t.text      "description"
    t.timestamp "created_at",    :null => false
    t.timestamp "updated_at",    :null => false
  end

  add_index "combo_types", ["restaurant_id"], :name => "index_combo_types_on_restaurant_id"

  create_table "combos", :force => true do |t|
    t.integer   "combo_type_id"
    t.integer   "restaurant_id"
    t.string    "name"
    t.timestamp "created_at",    :null => false
    t.timestamp "updated_at",    :null => false
  end

  add_index "combos", ["combo_type_id"], :name => "index_combos_on_combo_type_id"
  add_index "combos", ["restaurant_id"], :name => "index_combos_on_restaurant_id"

  create_table "comments", :force => true do |t|
    t.integer   "dish_id"
    t.integer   "restaurant_id"
    t.integer   "client_id"
    t.integer   "survey_question_id"
    t.string    "name"
    t.timestamp "created_at",                           :null => false
    t.timestamp "updated_at",                           :null => false
    t.text      "description"
    t.integer   "rating"
    t.boolean   "approved",           :default => true
  end

  add_index "comments", ["client_id"], :name => "index_comments_on_client_id"
  add_index "comments", ["dish_id"], :name => "index_comments_on_dish_id"
  add_index "comments", ["restaurant_id"], :name => "index_comments_on_restaurant_id"
  add_index "comments", ["survey_question_id"], :name => "index_comments_on_survey_question_id"

  create_table "dish_combo_associations", :force => true do |t|
    t.integer   "dish_id"
    t.integer   "combo_id"
    t.timestamp "created_at", :null => false
    t.timestamp "updated_at", :null => false
  end

  add_index "dish_combo_associations", ["combo_id"], :name => "index_dish_combo_associations_on_combo_id"
  add_index "dish_combo_associations", ["dish_id"], :name => "index_dish_combo_associations_on_dish_id"

  create_table "dish_section_associations", :force => true do |t|
    t.integer   "dish_id"
    t.integer   "section_id"
    t.timestamp "created_at", :null => false
    t.timestamp "updated_at", :null => false
  end

  add_index "dish_section_associations", ["dish_id"], :name => "index_dish_section_associations_on_dish_id"
  add_index "dish_section_associations", ["section_id"], :name => "index_dish_section_associations_on_section_id"

  create_table "dish_subsection_associations", :force => true do |t|
    t.integer   "dish_id"
    t.integer   "subsection_id"
    t.timestamp "created_at",    :null => false
    t.timestamp "updated_at",    :null => false
  end

  add_index "dish_subsection_associations", ["dish_id"], :name => "index_dish_subsection_associations_on_dish_id"
  add_index "dish_subsection_associations", ["subsection_id"], :name => "index_dish_subsection_associations_on_subsection_id"

  create_table "dish_translations", :force => true do |t|
    t.integer   "dish_id"
    t.string    "locale"
    t.string    "name"
    t.text      "description"
    t.text      "story"
    t.timestamp "created_at",  :null => false
    t.timestamp "updated_at",  :null => false
    t.string    "short_title"
    t.string    "badge_name"
  end

  add_index "dish_translations", ["dish_id"], :name => "index_dish_translations_on_dish_id"

  create_table "dish_type_associations", :force => true do |t|
    t.integer   "dish_type_id"
    t.integer   "dish_id"
    t.timestamp "created_at",   :null => false
    t.timestamp "updated_at",   :null => false
  end

  add_index "dish_type_associations", ["dish_id"], :name => "index_dish_type_associations_on_dish_id"
  add_index "dish_type_associations", ["dish_type_id"], :name => "index_dish_type_associations_on_dish_type_id"

  create_table "dish_type_translations", :force => true do |t|
    t.integer   "dish_type_id"
    t.string    "locale"
    t.string    "description"
    t.timestamp "created_at",   :null => false
    t.timestamp "updated_at",   :null => false
  end

  add_index "dish_type_translations", ["dish_type_id"], :name => "index_dish_type_translations_on_dish_type_id"
  add_index "dish_type_translations", ["locale"], :name => "index_dish_type_translations_on_locale"

  create_table "dish_types", :force => true do |t|
    t.string    "name"
    t.timestamp "created_at",        :null => false
    t.timestamp "updated_at",        :null => false
    t.string    "icon_file_name"
    t.string    "icon_content_type"
    t.integer   "icon_file_size"
    t.timestamp "icon_updated_at"
    t.integer   "position"
    t.string    "dish_class"
    t.string    "description"
  end

  create_table "dish_variations", :force => true do |t|
    t.integer   "dish_id"
    t.string    "name"
    t.timestamp "created_at",         :null => false
    t.timestamp "updated_at",         :null => false
    t.string    "photo_file_name"
    t.string    "photo_content_type"
    t.integer   "photo_file_size"
    t.timestamp "photo_updated_at"
    t.decimal   "price"
  end

  add_index "dish_variations", ["dish_id"], :name => "index_dish_variations_on_dish_id"

  create_table "dishes", :force => true do |t|
    t.string    "name"
    t.timestamp "created_at",                           :null => false
    t.timestamp "updated_at",                           :null => false
    t.string    "photo_file_name"
    t.string    "photo_content_type"
    t.integer   "photo_file_size"
    t.timestamp "photo_updated_at"
    t.boolean   "active",             :default => true
    t.integer   "position"
    t.text      "description"
    t.decimal   "price"
    t.decimal   "rating"
    t.integer   "reviews"
    t.text      "story"
    t.string    "video"
    t.string    "nutrition_facts"
    t.string    "badge_name"
    t.string    "short_title"
    t.boolean   "rate_me",            :default => true
    t.integer   "chain_id"
  end

  add_index "dishes", ["chain_id"], :name => "index_dishes_on_chain_id"

  create_table "menu_settings", :force => true do |t|
    t.integer   "menu_id"
    t.string    "name"
    t.timestamp "created_at",         :null => false
    t.timestamp "updated_at",         :null => false
    t.boolean   "active"
    t.integer   "priority"
    t.timestamp "trigger_activation"
    t.timestamp "last_time_changed"
    t.string    "from_day"
    t.string    "to_day"
    t.time      "from_time"
    t.time      "to_time"
  end

  add_index "menu_settings", ["menu_id"], :name => "index_menu_settings_on_menu_id"

  create_table "menus", :force => true do |t|
    t.integer   "restaurant_id"
    t.integer   "theme_id"
    t.string    "name"
    t.timestamp "created_at",    :null => false
    t.timestamp "updated_at",    :null => false
    t.decimal   "price"
    t.string    "menu_type"
    t.integer   "skin_id"
  end

  add_index "menus", ["restaurant_id"], :name => "index_menus_on_restaurant_id"
  add_index "menus", ["skin_id"], :name => "index_menus_on_skin_id"
  add_index "menus", ["theme_id"], :name => "index_menus_on_theme_id"

  create_table "order_items", :force => true do |t|
    t.integer   "order_id"
    t.integer   "dish_id"
    t.integer   "combo_id"
    t.integer   "combo_type_id"
    t.string    "name"
    t.timestamp "created_at",    :null => false
    t.timestamp "updated_at",    :null => false
    t.integer   "quantity"
    t.string    "note"
  end

  add_index "order_items", ["combo_id"], :name => "index_order_items_on_combo_id"
  add_index "order_items", ["combo_type_id"], :name => "index_order_items_on_combo_type_id"
  add_index "order_items", ["dish_id"], :name => "index_order_items_on_dish_id"
  add_index "order_items", ["order_id"], :name => "index_order_items_on_order_id"

  create_table "orders", :force => true do |t|
    t.integer   "tablet_id"
    t.integer   "client_id"
    t.string    "name"
    t.timestamp "created_at", :null => false
    t.timestamp "updated_at", :null => false
    t.string    "note"
    t.integer   "table_id"
    t.decimal   "total"
    t.string    "language"
  end

  add_index "orders", ["client_id"], :name => "index_orders_on_client_id"
  add_index "orders", ["created_at"], :name => "index_orders_on_created_at"
  add_index "orders", ["table_id"], :name => "index_orders_on_table_id"
  add_index "orders", ["tablet_id"], :name => "index_orders_on_tablet_id"

  create_table "rails_admin_histories", :force => true do |t|
    t.text      "message"
    t.string    "username"
    t.integer   "item"
    t.string    "table"
    t.integer   "month"
    t.integer   "year"
    t.timestamp "created_at", :null => false
    t.timestamp "updated_at", :null => false
  end

  add_index "rails_admin_histories", ["item", "table", "month", "year"], :name => "index_rails_admin_histories"

  create_table "restaurant_activities", :force => true do |t|
    t.integer   "restaurant_id"
    t.integer   "table_id"
    t.integer   "order_id"
    t.string    "name"
    t.timestamp "created_at",    :null => false
    t.timestamp "updated_at",    :null => false
    t.timestamp "ack"
  end

  add_index "restaurant_activities", ["created_at"], :name => "index_restaurant_activities_on_created_at"
  add_index "restaurant_activities", ["order_id"], :name => "index_restaurant_activities_on_order_id"
  add_index "restaurant_activities", ["restaurant_id"], :name => "index_restaurant_activities_on_restaurant_id"
  add_index "restaurant_activities", ["table_id"], :name => "index_restaurant_activities_on_table_id"

  create_table "restaurant_banners", :force => true do |t|
    t.integer   "restaurant_id"
    t.timestamp "created_at",                           :null => false
    t.timestamp "updated_at",                           :null => false
    t.string    "photo_file_name"
    t.string    "photo_content_type"
    t.integer   "photo_file_size"
    t.timestamp "photo_updated_at"
    t.string    "name"
    t.integer   "position"
    t.boolean   "active",             :default => true
  end

  add_index "restaurant_banners", ["restaurant_id"], :name => "index_restaurant_banners_on_restaurant_id"

  create_table "restaurant_settings", :force => true do |t|
    t.integer   "restaurant_id"
    t.string    "name"
    t.timestamp "created_at",                             :null => false
    t.timestamp "updated_at",                             :null => false
    t.integer   "num_licenses"
    t.string    "default_language"
    t.timestamp "last_menu_sync"
    t.boolean   "multilang_homepage",  :default => false
    t.boolean   "games",               :default => false
    t.boolean   "call_waiter_button",  :default => true
    t.boolean   "order_button",        :default => true
    t.boolean   "request_bill_button", :default => true
    t.boolean   "show_help_button",    :default => true
    t.boolean   "show_survey",         :default => true
    t.integer   "access_key",          :default => 1111
    t.boolean   "show_filters",        :default => false
    t.string    "supported_lang"
  end

  add_index "restaurant_settings", ["restaurant_id"], :name => "index_restaurant_settings_on_restaurant_id"

  create_table "restaurants", :force => true do |t|
    t.integer   "user_id"
    t.integer   "chain_id"
    t.string    "name"
    t.timestamp "created_at", :null => false
    t.timestamp "updated_at", :null => false
    t.string    "manager"
    t.string    "email"
    t.string    "address"
    t.string    "phone"
    t.text      "note"
  end

  add_index "restaurants", ["chain_id"], :name => "index_restaurants_on_chain_id"
  add_index "restaurants", ["user_id"], :name => "index_restaurants_on_user_id"

  create_table "section_translations", :force => true do |t|
    t.integer   "section_id"
    t.string    "locale"
    t.string    "name"
    t.timestamp "created_at", :null => false
    t.timestamp "updated_at", :null => false
  end

  add_index "section_translations", ["section_id"], :name => "index_section_translations_on_section_id"

  create_table "sections", :force => true do |t|
    t.integer   "menu_id"
    t.string    "name"
    t.timestamp "created_at",                            :null => false
    t.timestamp "updated_at",                            :null => false
    t.string    "photo_file_name"
    t.string    "photo_content_type"
    t.integer   "photo_file_size"
    t.timestamp "photo_updated_at"
    t.boolean   "active",             :default => true
    t.integer   "position"
    t.boolean   "hasBigSubsections",  :default => false
    t.integer   "dishes_per_page",    :default => 0
  end

  add_index "sections", ["menu_id"], :name => "index_sections_on_menu_id"

  create_table "skins", :force => true do |t|
    t.integer  "theme_id"
    t.string   "name"
    t.datetime "created_at",              :null => false
    t.datetime "updated_at",              :null => false
    t.text     "description"
    t.string   "stylesheet_file_name"
    t.string   "stylesheet_content_type"
    t.integer  "stylesheet_file_size"
    t.datetime "stylesheet_updated_at"
    t.integer  "user_id"
  end

  add_index "skins", ["theme_id"], :name => "index_skins_on_theme_id"
  add_index "skins", ["user_id"], :name => "index_skins_on_user_id"

  create_table "subsection_translations", :force => true do |t|
    t.integer   "subsection_id"
    t.string    "locale"
    t.string    "name"
    t.timestamp "created_at",    :null => false
    t.timestamp "updated_at",    :null => false
  end

  add_index "subsection_translations", ["subsection_id"], :name => "index_subsection_translations_on_subsection_id"

  create_table "subsections", :force => true do |t|
    t.integer   "section_id"
    t.string    "name"
    t.timestamp "created_at",                           :null => false
    t.timestamp "updated_at",                           :null => false
    t.string    "photo_file_name"
    t.string    "photo_content_type"
    t.integer   "photo_file_size"
    t.timestamp "photo_updated_at"
    t.boolean   "active",             :default => true
    t.integer   "position"
  end

  add_index "subsections", ["section_id"], :name => "index_subsections_on_section_id"

  create_table "survey_question_translations", :force => true do |t|
    t.integer   "survey_question_id"
    t.string    "locale"
    t.string    "name"
    t.text      "description"
    t.timestamp "created_at",         :null => false
    t.timestamp "updated_at",         :null => false
  end

  add_index "survey_question_translations", ["survey_question_id"], :name => "index_310e069e62f38daa0fbaf3db7eb732365abc8120"

  create_table "survey_questions", :force => true do |t|
    t.integer   "chain_id"
    t.string    "name"
    t.timestamp "created_at",                     :null => false
    t.timestamp "updated_at",                     :null => false
    t.text      "description"
    t.integer   "position"
    t.boolean   "active",      :default => true
    t.boolean   "yes_no_type", :default => false
  end

  add_index "survey_questions", ["chain_id"], :name => "index_survey_questions_on_chain_id"

  create_table "tables", :force => true do |t|
    t.integer   "restaurant_id"
    t.string    "name"
    t.timestamp "created_at",    :null => false
    t.timestamp "updated_at",    :null => false
    t.integer   "number"
    t.string    "status"
    t.integer   "dinners"
    t.string    "language"
  end

  add_index "tables", ["restaurant_id"], :name => "index_tables_on_restaurant_id"

  create_table "tablets", :force => true do |t|
    t.integer   "table_id"
    t.string    "name"
    t.timestamp "created_at",                        :null => false
    t.timestamp "updated_at",                        :null => false
    t.boolean   "active"
    t.string    "access_key"
    t.string    "display_size"
    t.string    "device_brand"
    t.string    "device_name"
    t.string    "device_os"
    t.timestamp "last_menu_sync"
    t.boolean   "activated",      :default => false
    t.timestamp "alive"
  end

  add_index "tablets", ["table_id"], :name => "index_tablets_on_table_id"

  create_table "themes", :force => true do |t|
    t.string    "name"
    t.timestamp "created_at",  :null => false
    t.timestamp "updated_at",  :null => false
    t.string    "css"
    t.text      "description"
  end

  create_table "users", :force => true do |t|
    t.string    "email",                                 :default => "", :null => false
    t.string    "encrypted_password",     :limit => 128, :default => "", :null => false
    t.string    "reset_password_token"
    t.timestamp "reset_password_sent_at"
    t.timestamp "remember_created_at"
    t.integer   "sign_in_count",                         :default => 0
    t.timestamp "current_sign_in_at"
    t.timestamp "last_sign_in_at"
    t.string    "current_sign_in_ip"
    t.string    "last_sign_in_ip"
    t.timestamp "created_at",                                            :null => false
    t.timestamp "updated_at",                                            :null => false
    t.string    "role"
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

end
