class Api::TodosController < ApplicationController
  def index
    render json: Todo.all.to_json
    # render json: Recipe.all.includes(:ingredients).to_json(include: :ingredients)
  end

  def show
    todo = Todo.find(params[:id])
    render json: todo.to_json
  end

  def create
    todo = Todo.new(todo_params)
    todo.save!
    render json: todo.to_json

    # if todo.save
    #   render json: todo
    # else
    #   render json: { errors: todo.errors.full_messages }, status: 422
    # end
  end

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy
    render json: todo.to_json
  end

  def update
    todo = Todo.find(params[:id])
    todo.update(todo_params)
    todo.save!
    render json: todo.to_json
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body)
  end
end
