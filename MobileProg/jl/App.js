import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

export default function ToDoApp() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Math.random().toString(), value: task }]);
      setTask('');
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a task..."
          value={task}
          onChangeText={text => setTask(text)}
        />
        <Button title="Add" onPress={addTask} color="#3b82f6" />
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.value}</Text>
            <TouchableOpacity onPress={() => removeTask(item.id)} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#e0f7fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#00796b',
    borderRadius: 0,
    padding: 5,
    marginBottom: 10,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#3b82f6',
    borderRadius: 0,
  },
  taskText: {
    color: '#004d40',
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: '#d32f2f',
    padding: 5,
    borderRadius: 0,
  },
  removeButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
