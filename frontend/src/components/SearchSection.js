import React, { useState } from 'react';
import '../styles/SearchSection.css';

const SearchSection = () => {
  const [searchData, setSearchData] = useState({
    destination: '',
    depart: '',
    retour: '',
    voyageurs: 1
  });

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Recherche soumise:', searchData);
    alert(`Recherche pour: ${searchData.destination} du ${searchData.depart} au ${searchData.retour} pour ${searchData.voyageurs} voyageur(s)`);
  };

  return (
    <section className="search-section" id="destinations">
      <div className="container">
        <h2>Trouvez votre prochaine destination</h2>
        <p>Recherchez parmi des milliers de destinations dans le monde entier</p>

        <div className="search-card">
          <form onSubmit={handleSearchSubmit}>
            <div className="search-fields">
              <div className="input-group destination-input">
                <span className="input-icon">📍</span>
                <input
                  type="text"
                  name="destination"
                  value={searchData.destination}
                  onChange={handleSearchChange}
                  placeholder="Où voulez-vous aller?"
                  required
                />
              </div>

              <div className="input-group">
                <span className="input-icon">📅</span>
                <input
                  type="date"
                  name="depart"
                  value={searchData.depart}
                  onChange={handleSearchChange}
                  required
                />
              </div>

              <div className="input-group">
                <span className="input-icon">📅</span>
                <input
                  type="date"
                  name="retour"
                  value={searchData.retour}
                  onChange={handleSearchChange}
                  required
                />
              </div>

              <div className="input-group">
                <span className="input-icon">👥</span>
                <select
                  name="voyageurs"
                  value={searchData.voyageurs}
                  onChange={handleSearchChange}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num > 1 ? 'Personnes' : 'Personne'}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="search-button-container">
              <button type="submit" className="search-btn">
                🔍 Rechercher
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;