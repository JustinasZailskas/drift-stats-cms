import { useState, useEffect, FormEvent } from "react";
import { Season } from "../interface/Season";
import { League } from "../interface/League";
import { fetchLeaguesData, fetchSeasonsData } from "../services/Api";
import styles from "../styles/AddSeason.module.css";
import ModalComponent from "../components/ModalComponent";
import ButtonComponent from "../components/ButtonComponent";

interface ErrorInterface {
  erroName: string;
}

interface NewSeasonInferface {
  seasonTitle: "";
  year: 0 | null;
}

function AddSeason() {
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [leagues, setLeagues] = useState<League[]>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [postSeason, setPostSeason] = useState<NewSeasonInferface>({
    seasonTitle: "",
    year: null,
  });
  const [error, setError] = useState<ErrorInterface>({ erroName: "" });

  useEffect(() => {
    const getData = async () => {
      const seasons = await fetchSeasonsData();
      const leagues = await fetchLeaguesData();
      setSeasons(seasons);
      setLeagues(leagues);
    };
    getData();
  }, []);

  const validateForm = (): ErrorInterface => {
    const newError: ErrorInterface = {
      erroName: "",
    };
    if (!postSeason.seasonTitle || !postSeason.year) {
      newError.erroName = "Title and body are required";
    }
    return newError;
  };

  const saveSeason = async (
    event: FormEvent<HTMLFormElement>,
    leagueID: string
  ): Promise<void> => {
    event.preventDefault();
    const newError = validateForm();
    if (newError.erroName) {
      setError(newError);
      return;
    }
    setError({ erroName: "" });

    const postObj = {
      ...postSeason,
      leagueID: leagueID,
    };
    console.log(postObj);
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:7438/seasons", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postObj),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const updatedList = [data, ...seasons];
      setSeasons(updatedList);
      setPostSeason({ seasonTitle: "", year: null });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => setIsOpenModal(false);

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
                <button
                  className={styles.addButton}
                  onClick={() => openModal()}
                >
                  Sukurti naują sezoną
                </button>
                {
                  <ModalComponent isOpen={isOpenModal} onClose={closeModal}>
                    <ButtonComponent
                      type="button"
                      title="Uzdaryti"
                      action={closeModal}
                      disable={false}
                    />
                  </ModalComponent>
                }
              </ul>
            ) : (
              <div>
                <p>Nėra sukurta sezonų šiai lygai</p>
                <button
                  className={styles.addButton}
                  onClick={() => openModal()}
                >
                  Sukurti nauja sezoną
                </button>
                {
                  <ModalComponent isOpen={isOpenModal} onClose={closeModal}>
                    <ButtonComponent
                      type="button"
                      title="Uzdaryti"
                      action={closeModal}
                      disable={false}
                    />
                  </ModalComponent>
                }
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default AddSeason;
