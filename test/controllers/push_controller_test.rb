require 'test_helper'

class PushControllerTest < ActionDispatch::IntegrationTest
  test "should get push" do
    get push_push_url
    assert_response :success
  end

end
