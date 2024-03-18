import React, { useState } from "react";
import "./Packages.css";
import colombo from "../assets/Colombo.jpg";
import galle from "../assets/galle.jpeg";
import yala from "../assets/yala.jpeg";
import kandy from "../assets/kandy.jpeg";
import ella from "../assets/ella.jpeg";
import sigiriya from "../assets/sigiriya.jpeg";
import nuwara from "../assets/nuwara.jpeg";
import anuradha from "../assets/anuradha.jpeg";
import trin from "../assets/trin.jpeg";
import jaffna from "../assets/jaffna.jpeg";

const PackagesPage = () => {
    const allPackages = [
      {
        id: 1,
        name: "Colombo City Explorer",
        cities: ["Colombo", "Negombo"],
        price: 8200,
        duration: 2,
        dates: "Dec 1, 2024 - Dec 15, 2024",
        activities: ["City Tour", "Shopping", "Cultural Exploration"],
        image: colombo,
      },
      {
        id: 2,
        name: "Kandy & Cultural Triangle",
        cities: ["Kandy", "Sigiriya", "Dambulla"],
        price: 20500,
        duration: 3,
        dates: "Dec 5, 2024 - Dec 20, 2024",
        activities: ["Temple Visits", "Heritage Sites", "Traditional Dance Show"],
        image: kandy,
      },
      {
        id: 3,
        name: "Galle Beach Adventure",
        cities: ["Galle", "Hikkaduwa", "Unawatuna"],
        price: 15000,
        duration: 4,
        dates: "Dec 10, 2024 - Dec 25, 2024",
        activities: ["Beach Fun", "Snorkeling", "Historical Exploration"],
        image:galle,
      },
      {
        id: 4,
        name: "Nuwara Eliya Highlands Retreat",
        cities: ["Nuwara Eliya", "Haputale", "Ella"],
        price: 18000,
        duration: 3,
        dates: "Dec 12, 2024 - Dec 27, 2024",
        activities: ["Tea Plantation Tours", "Hiking", "Waterfalls"],
        image: nuwara,
      },
      {
        id: 5,
        name: "Yala Wildlife Safari",
        cities: ["Yala", "Tissamaharama"],
        price: 16000,
        duration: 2,
        dates: "Dec 8, 2024 - Dec 22, 2024",
        activities: ["Safari Adventure", "Wildlife Photography", "Nature Walks"],
        image: yala,
      },
      {
        id: 6,
        name: "Jaffna Heritage Voyage",
        cities: ["Jaffna", "Point Pedro"],
        price: 14000,
        duration: 3,
        dates: "Dec 14, 2024 - Dec 30, 2024",
        activities: ["Cultural Sites", "Island Tours", "Traditional Cuisine"],
        image: jaffna,
      },
      {
        id: 7,
        name: "Trincomalee Coastal Bliss",
        cities: ["Trincomalee", "Nilaveli"],
        price: 17000,
        duration: 4,
        dates: "Dec 18, 2024 - Jan 2, 2025",
        activities: ["Beach Relaxation", "Snorkeling", "Whale Watching"],
        image: trin,
      },
      {
        id: 8,
        name: "Arugam Bay Surf Experience",
        cities: ["Arugam Bay", "Pottuvil"],
        price: 15000,
        duration: 5,
        dates: "Dec 20, 2024 - Jan 5, 2025",
        activities: ["Surfing", "Beach Life", "Lagoon Safari"],
        image: ella,
      },
      {
        id: 9,
        name: "Anuradhapura Ancient Trail",
        cities: ["Anuradhapura", "Mihintale"],
        price: 12000,
        duration: 2,
        dates: "Dec 3, 2024 - Dec 18, 2024",
        activities: ["Historical Sites", "Stupa Visits", "Cycling Tours"],
        image: anuradha,
      },
    ];

  const topCities = [
    "Colombo",
    "Kandy",
    "Galle",
    "Sigiriya",
    "Dambulla",
    "Negombo",
    "Hikkaduwa",
    "Unawatuna",
    "Ella",
    "Nuwara Eliya",
  ];

  const [filters, setFilters] = useState({
    maxBudget: 0,
    duration: 0,
    city: "",
  });

  const [sortOption, setSortOption] = useState("");
  const [filteredPackages, setFilteredPackages] = useState(allPackages);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const applyFilters = () => {
    let filtered = allPackages;

    // Apply filters
    if (filters.maxBudget > 0) {
      filtered = filtered.filter((pkg) => pkg.price <= filters.maxBudget);
    }
    if (filters.duration > 0) {
      filtered = filtered.filter((pkg) => pkg.duration <= filters.duration);
    }
    if (filters.city) {
      filtered = filtered.filter((pkg) =>
        pkg.cities.some((city) =>
          city.toLowerCase().includes(filters.city.toLowerCase())
        )
      );
    }

    // Apply sorting
    if (sortOption === "priceLowToHigh") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHighToLow") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "durationLowToHigh") {
      filtered = filtered.sort((a, b) => a.duration - b.duration);
    } else if (sortOption === "durationHighToLow") {
      filtered = filtered.sort((a, b) => b.duration - a.duration);
    }

    setFilteredPackages(filtered.length > 0 ? filtered : []);
  };

  return (
    <div className="packages-page">
      <h2>Explore Packages</h2>

      <div className="filters">
        {/* Max Budget Filter */}
        <div className="filter">
          <label>Max Budget (per person):</label>
          <input
            type="number"
            name="maxBudget"
            value={filters.maxBudget}
            onChange={handleFilterChange}
            placeholder="Enter max budget"
          />
        </div>

        {/* Duration Filter */}
        <div className="filter">
          <label>Duration (in nights):</label>
          <input
            type="range"
            name="duration"
            min="1"
            max="9"
            value={filters.duration}
            onChange={handleFilterChange}
            step="1"
          />
          <div className="duration-value">{filters.duration} Nights</div>
        </div>

        {/* City Filter */}
        <div className="filter">
          <label>City:</label>
          <select
            name="city"
            value={filters.city}
            onChange={handleFilterChange}
          >
            <option value="">Select a city</option>
            {topCities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Dropdown */}
        <div className="filter">
          <label>Sort By:</label>
          <select value={sortOption} onChange={handleSortChange}>
            <option value="">Select sorting option</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="durationLowToHigh">Duration: Low to High</option>
            <option value="durationHighToLow">Duration: High to Low</option>
          </select>
        </div>

        <button className="apply-button" onClick={applyFilters}>
          Apply Filters
        </button>
      </div>

      <div className="packages-list">
        {filteredPackages.length > 0 ? (
          filteredPackages.map((pkg) => (
            <div key={pkg.id} className="package-card">
              <img className="package-image" src={pkg.image} alt={pkg.name} />
              <h3>{pkg.name}</h3>
              <p>
                <strong>Cities:</strong> {pkg.cities.join(", ")}
              </p>
              <p>
                <strong>Price:</strong> ₹{pkg.price}
              </p>
              <p>
                <strong>Duration:</strong> {pkg.duration} Nights
              </p>
              <p>
                <strong>Dates:</strong> {pkg.dates}
              </p>
              <p>
                <strong>Activities:</strong> {pkg.activities.join(", ")}
              </p>
            </div>
          ))
        ) : (
          <p>No packages match your criteria. Try adjusting the filters.</p>
        )}
      </div>
    </div>
  );
};

export default PackagesPage;
