# == Schema Information
#
# Table name: combo_types
#
#  id            :integer          not null, primary key
#  restaurant_id :integer
#  name          :string(255)
#  active        :boolean
#  position      :integer
#  price         :decimal(, )
#  description   :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class ComboTypeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
