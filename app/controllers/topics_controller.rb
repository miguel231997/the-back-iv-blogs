class TopicsController < ApplicationController
  

  # GET /topics
  def index
    #@post = Post.find(params[:post_id])
    #@topics = Topic.where(post_id: @post.id)
    @topics = Topic.all

    render json: @topics, include: :posts, status: :ok
  end

  # GET /topics/1
  def show
    render json: @topic
  end

  
end
