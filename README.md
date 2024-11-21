# To-Do List Manager

## Project Description

This project is a basic To-Do List Manager application designed as a learning exercise to integrate Django with Angular. The application allows users to manage their tasks efficiently by adding and removing tasks. The backend is powered by Django, while the frontend is built using AngularJS. Data persistence is handled through a PostgreSQL database.

## Features

- **Task Addition**: Users can add new tasks to their to-do list.
- **Task Removal**: Users can remove completed tasks from their list.
- **Django and Angular Integration**: The project demonstrates how to integrate Django as a backend framework with AngularJS for the frontend.
- **Data Persistence**: Tasks are stored in a PostgreSQL database, ensuring data is retained across sessions.

## Prerequisites

Before you begin, ensure you have the following tools and frameworks installed:

- **Python**: Version 3.8 or higher
- **Django**: Version 5.1.3
- **AngularJS**: Version 1.8.2
- **PostgreSQL**: Version 12 or higher
- **Node.js and npm**: For managing Angular dependencies

## Installation and Setup

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/todo-list-manager.git
   cd todo-list-manager
   ```

2. **Set Up the Virtual Environment**:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Python Dependencies**:

   ```bash
   pip install -r todo/requirements/base.txt
   ```

4. **Configure PostgreSQL Database**:

   - Create a PostgreSQL database named `todo-app`.
   - Update the database credentials in `todo/todo/settings.py`:
     ```python:todo/todo/settings.py
     startLine: 78
     endLine: 84
     ```

5. **Run Migrations**:

   ```bash
   python manage.py migrate
   ```

6. **Start the Django Server**:

   ```bash
   python manage.py runserver
   ```

7. **Serve the AngularJS Frontend**:
   - Ensure you have a static server setup to serve the AngularJS files located in `todo/static/js/todo.js`.

## Usage

Once the server is running, you can access the application at `http://localhost:8000`. Here are some common actions you can perform:

- **Add a Task**: Enter a task in the input field and click "Add Item" to add it to your list.
- **Remove Completed Tasks**: Check the tasks you have completed and click "Remove Completed" to delete them from your list.
