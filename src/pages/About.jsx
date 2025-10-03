import React, { useState, useEffect } from 'react';

export default function About() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
      createdAt: new Date().toLocaleString()
    };

    setTodos([...todos, newTodo]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const { active, completed, all } = {
    all: todos,
    active: todos.filter(todo => !todo.completed),
    completed: todos.filter(todo => todo.completed)
  };

  const filteredTodos = filter === 'all' ? all : filter === 'active' ? active : completed;

  const stats = {
    total: todos.length,
    active: active.length,
    completed: completed.length,
    completionRate: todos.length ? Math.round((completed.length / todos.length) * 100) : 0
  };

  return (
    <div style={styles.container}>
      <h1>ℹ️ Giới Thiệu - Todo App Demo</h1>
      
      <div style={styles.infoBox}>
        <h3>🚀 Công nghệ sử dụng:</h3>
        <ul style={styles.techList}>
          <li>⚛️ React 18 với Hooks (useState, useEffect)</li>
          <li>🎯 JavaScript ES6+ (Arrow Functions, Destructuring, Spread Operator)</li>
          <li>💾 LocalStorage API</li>
          <li>🎨 CSS-in-JS Styling</li>
        </ul>
      </div>

      <div style={styles.statsBox}>
        <div style={styles.stat}>
          <span style={styles.statNumber}>{stats.total}</span>
          <span style={styles.statLabel}>Tổng công việc</span>
        </div>
        <div style={styles.stat}>
          <span style={{ ...styles.statNumber, color: '#ffc107' }}>{stats.active}</span>
          <span style={styles.statLabel}>Đang làm</span>
        </div>
        <div style={styles.stat}>
          <span style={{ ...styles.statNumber, color: '#28a745' }}>{stats.completed}</span>
          <span style={styles.statLabel}>Hoàn thành</span>
        </div>
        <div style={styles.stat}>
          <span style={{ ...styles.statNumber, color: '#17a2b8' }}>{stats.completionRate}%</span>
          <span style={styles.statLabel}>Tỷ lệ hoàn thành</span>
        </div>
      </div>

      <div style={styles.inputGroup}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Thêm công việc mới..."
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.addBtn}>
          ➕ Thêm
        </button>
      </div>

      <div style={styles.filterGroup}>
        <button
          onClick={() => setFilter('all')}
          style={{
            ...styles.filterBtn,
            backgroundColor: filter === 'all' ? '#007bff' : '#e9ecef',
            color: filter === 'all' ? 'white' : '#495057'
          }}
        >
          Tất cả ({todos.length})
        </button>
        <button
          onClick={() => setFilter('active')}
          style={{
            ...styles.filterBtn,
            backgroundColor: filter === 'active' ? '#ffc107' : '#e9ecef',
            color: filter === 'active' ? 'white' : '#495057'
          }}
        >
          Đang làm ({active.length})
        </button>
        <button
          onClick={() => setFilter('completed')}
          style={{
            ...styles.filterBtn,
            backgroundColor: filter === 'completed' ? '#28a745' : '#e9ecef',
            color: filter === 'completed' ? 'white' : '#495057'
          }}
        >
          Hoàn thành ({completed.length})
        </button>
      </div>

      <ul style={styles.list}>
        {filteredTodos.length === 0 ? (
          <p style={styles.empty}>
            {filter === 'all' ? '📝 Chưa có công việc nào' : 
             filter === 'active' ? '✨ Không có công việc đang làm' : 
             '🎉 Chưa hoàn thành công việc nào'}
          </p>
        ) : (
          filteredTodos.map(todo => (
            <li key={todo.id} style={styles.todoItem}>
              <div style={styles.todoContent}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  style={styles.checkbox}
                />
                <div style={styles.todoText}>
                  <span
                    style={{
                      textDecoration: todo.completed ? 'line-through' : 'none',
                      opacity: todo.completed ? 0.6 : 1,
                      fontSize: '16px'
                    }}
                  >
                    {todo.text}
                  </span>
                  <small style={styles.timestamp}>{todo.createdAt}</small>
                </div>
              </div>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={styles.deleteBtn}
              >
                🗑️ Xóa
              </button>
            </li>
          ))
        )}
      </ul>

      {completed.length > 0 && (
        <button onClick={clearCompleted} style={styles.clearBtn}>
          🧹 Xóa các công việc đã hoàn thành ({completed.length})
        </button>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif'
  },
  infoBox: {
    backgroundColor: '#e7f3ff',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    border: '2px solid #007bff'
  },
  techList: {
    listStyle: 'none',
    padding: 0,
    margin: '10px 0 0 0'
  },
  statsBox: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '15px',
    marginBottom: '20px'
  },
  stat: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  statNumber: {
    display: 'block',
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#007bff'
  },
  statLabel: {
    display: 'block',
    fontSize: '14px',
    color: '#6c757d',
    marginTop: '5px'
  },
  inputGroup: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px'
  },
  input: {
    flex: 1,
    padding: '12px',
    fontSize: '16px',
    border: '2px solid #dee2e6',
    borderRadius: '5px'
  },
  addBtn: {
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  filterGroup: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    flexWrap: 'wrap'
  },
  filterBtn: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    transition: 'all 0.3s'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  empty: {
    textAlign: 'center',
    padding: '40px',
    fontSize: '18px',
    color: '#6c757d'
  },
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    marginBottom: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
    transition: 'all 0.3s'
  },
  todoContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flex: 1
  },
  checkbox: {
    width: '20px',
    height: '20px',
    cursor: 'pointer'
  },
  todoText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  timestamp: {
    color: '#6c757d',
    fontSize: '12px'
  },
  deleteBtn: {
    padding: '8px 16px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px'
  },
  clearBtn: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px'
  }
};