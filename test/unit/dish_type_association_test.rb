# == Schema Information
#
# Table name: dish_type_associations
#
#  id           :integer          not null, primary key
#  dish_type_id :integer
#  dish_id      :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class DishTypeAssociationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
