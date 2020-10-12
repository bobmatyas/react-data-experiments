import React from 'react';
import './App.css';
import GitHubUser from './components/GitHubUser.js'
import GitHubUserLoading from './components/GitHubUserLoading.js'
import PeakList from './components//PeakList';
import PeakListwithListComponent from './components/PeakListwithListComponent'

function App() {
  return (
    <div className="App">
      <GitHubUser login="bobmatyas" />

      <h2>With Loading State</h2>
      <GitHubUserLoading login="bobmatyas" />

      <h2>List Sample</h2>
      <PeakList />

      <h2>List with Separate List Component</h2>

      <PeakListwithListComponent />

    </div>
  );
}

export default App;
