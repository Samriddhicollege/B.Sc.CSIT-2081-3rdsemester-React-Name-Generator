import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { getRandomNepaliName } from "../../utils/nepaliNames";
import { Loader2, Plus, Trash2, Edit2, Check, X } from "lucide-react";

/**
 * 1. Component Architecture - App -> Container -> UI Components
 */
const NameGenerator = () => {
  // 2. State Management (useState)
  const [preferences, setPreferences] = useState({
    gender: "all",
    nat: "us",
    count: 5,
  });
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  // 6. LocalStorage (MANDATORY) using Custom Hook (Bonus)
  const [savedNames, setSavedNames] = useLocalStorage("saved-names", []);

  // 7. useEffect (Side Effects) - Title synchronization
  useEffect(() => {
    document.title = `Names: ${savedNames.length} Saved`;
  }, [savedNames.length]);

  // 10. Basic Validation & 8. API Handling
  const fetchNames = async () => {
    if (preferences.count < 1 || preferences.count > 50) {
      setError("Please choose between 1 and 50 names.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      if (preferences.nat === "np") {
        const results = getRandomNepaliName(
          preferences.gender,
          preferences.count,
        );
        setNames(results);
      } else {
        const url = `https://randomuser.me/api/?results=${preferences.count}&nat=${preferences.nat}&gender=${preferences.gender === "all" ? "" : preferences.gender}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch from server.");
        const data = await response.json();
        const formattedNames = data.results.map((user) => ({
          id: user.login.uuid,
          firstName: user.name.first,
          lastName: user.name.last,
          email: user.email,
          nat: user.nat,
          nickname: "",
        }));
        setNames(formattedNames);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePreferenceChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prev) => ({
      ...prev,
      [name]: name === "count" ? parseInt(value) || 0 : value,
    }));
  };

  /**
   * 11. CRUD Operations (C - Create, R - Read, U - Update, D - Delete)
   */

  // Create
  const saveName = (nameObj) => {
    if (!savedNames.find((n) => n.id === nameObj.id)) {
      setSavedNames([...savedNames, nameObj]);
    }
  };

  // Update
  const startEditing = (nameObj) => {
    setEditingId(nameObj.id);
    setEditValue(nameObj.nickname || "");
  };

  const updateNickname = (id) => {
    if (editValue.length > 20) {
      alert("Nickname too long!");
      return;
    }
    setSavedNames(
      savedNames.map((n) => (n.id === id ? { ...n, nickname: editValue } : n)),
    );
    setEditingId(null);
  };

  // Delete
  const deleteSavedName = (id) => {
    setSavedNames(savedNames.filter((n) => n.id !== id));
  };

  return (
    <div className="fade-in">
      {/* 1. Architecture: Controls Section */}
      <section className="simple-card" style={{ marginBottom: "2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1.5rem",
            alignItems: "flex-end",
          }}
        >
          <div>
            <label>Nationality</label>
            <select
              name="nat"
              value={preferences.nat}
              onChange={handlePreferenceChange}
            >
              <option value="us">United States</option>
              <option value="gb">United Kingdom</option>
              {/* Feature: Nepal Support */}
              <option value="np">Nepal</option>
              <option value="fr">France</option>
              <option value="de">Germany</option>
              <option value="in">India</option>
            </select>
          </div>
          <div>
            <label>Gender</label>
            <select
              name="gender"
              value={preferences.gender}
              onChange={handlePreferenceChange}
            >
              <option value="all">Any</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label>Count</label>
            <input
              type="number"
              name="count"
              value={preferences.count}
              onChange={handlePreferenceChange}
              min="1"
              max="50"
            />
          </div>
          <button
            className="btn-simple"
            onClick={fetchNames}
            disabled={loading}
            style={{ width: "100%" }}
          >
            {loading ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              "Generate Names"
            )}
          </button>
        </div>
      </section>

      {/* 9. Conditional Rendering (Error) */}
      {error && (
        <div
          style={{
            color: "var(--danger)",
            marginBottom: "1rem",
            fontSize: "0.875rem",
          }}
        >
          Error: {error}
        </div>
      )}

      <div className="grid-main">
        {/* Results Matrix (Read) */}
        <div>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
            Generated
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {names.length === 0 && !loading && (
              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
                Names will appear here.
              </p>
            )}
            {names.map((name) => (
              <div
                key={name.id}
                className="simple-card"
                style={{
                  padding: "0.9rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: "600" }}>
                    {name.firstName}
                  </div>

                </div>
                {/* 4. Props usage implicit in onClick */}
                <button
                  onClick={() => saveName(name)}
                  className="btn-simple"
                  style={{
                    background: "white",
                    color: "var(--primary)",
                    border: "1px solid var(--primary)",
                    padding: "0.4rem 0.8rem",
                    fontSize: "0.75rem",
                  }}
                >
                  <Plus size={14} /> Save
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Library (CRUD: R/U/D) */}
        <div
          style={{ borderLeft: "1px solid var(--border)", paddingLeft: "2rem" }}
        >
          <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
            Library ({savedNames.length})
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {savedNames.length === 0 && (
              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
                No names saved.
              </p>
            )}

            {/* 5. List Rendering (+ Unique Keys) */}
            {savedNames.map((name) => (
              <div
                key={name.id}
                className="simple-card"
                style={{ padding: "0.75rem" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: "600", fontSize: "0.9rem" }}>
                      {name.firstName}
                      {name.nickname && (
                        <span
                          style={{
                            color: "var(--primary)",
                            fontStyle: "italic",
                            marginLeft: "0.4rem",
                            fontWeight: "400",
                          }}
                        >
                          ({name.nickname})
                        </span>
                      )}
                    </div>
                    <div
                      style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}
                    >
                      {name.nat.toUpperCase()}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button
                      onClick={() => startEditing(name)}
                      className="btn-simple"
                      style={{
                        padding: "0.4rem",
                        background: "#fef3c7",
                        color: "#d97706",
                        border: "none",
                      }}
                    >
                      <Edit2 size={12} />
                    </button>
                    <button
                      onClick={() => deleteSavedName(name.id)}
                      className="btn-simple btn-danger"
                      style={{ padding: "0.4rem", border: "none" }}
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>

                {/* 9. Conditional Rendering (Edit Mode) */}
                {editingId === name.id && (
                  <div
                    style={{
                      marginTop: "0.5rem",
                      display: "flex",
                      gap: "0.5rem",
                    }}
                  >
                    <input
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      placeholder="Add tag..."
                      style={{
                        flex: 1,
                        padding: "0.2rem 0.4rem",
                        fontSize: "0.8rem",
                      }}
                      autoFocus
                    />
                    <button
                      onClick={() => updateNickname(name.id)}
                      style={{
                        color: "var(--success)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <Check size={16} />
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      style={{
                        color: "var(--danger)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameGenerator;
