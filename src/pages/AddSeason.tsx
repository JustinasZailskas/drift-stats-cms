import { useState, useEffect } from "react";
import { Season } from "../interface/Season";
import { League } from "../interface/League";
import { fetchLeaguesData, fetchSeasonsData } from "../services/Api";
import styles from "../styles/AddSeason.module.css";

function AddSeason() {
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [leagues, setLeagues] = useState<League[]>([]);

  useEffect(() => {
    const getData = async () => {
      const seasons = await fetchSeasonsData();
      const leagues = await fetchLeaguesData();
      setSeasons(seasons);
      setLeagues(leagues);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Naujo sezono sukūrimas</h1>
      {leagues.map((league) => {
        const filteredSeasons = seasons.filter(
          (season) => season.leagueID === league._id
        );
        return (
          <div key={league._id} className={styles.leagueContainer}>
            <h2>{league.leagueTitle}</h2>
            {filteredSeasons.length > 0 ? (
              <ul className={styles.elementsContainer}>
                {filteredSeasons.map((season) => (
                  <li key={season._id} className={styles.element}>
                    {season.seasonTitle}
                  </li>
                ))}
                <button className={styles.addButton}>
                  Sukurti naują sezoną
                </button>
              </ul>
            ) : (
              <div>
                <p>Nėra sukurta sezonų šiai lygai</p>
                <button className={styles.addButton}>
                  Sukurti nauja sezoną
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default AddSeason;
