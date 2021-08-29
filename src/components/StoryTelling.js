const StoryTelling = () => {
    var date = Date.now()
    var todaysDate = new Date(date).toLocaleDateString("fr-FR", {
        year: "numeric",
      });

    return(
        <div className="parent-container-st">
            <table className="StoryTelling">
                <tr>
                    <td>
                        <h2>Notre Mission</h2>
                        <i>Aporter design et modernité aux MNORPG d'aujourd'hui</i>
                    </td>
                    <td class="STtext">
                        Notre jeu a été réalisé
                            par amour sous Unreal engines, 
                            traduit en plusieurs langues
                            et avec un gameplay simple et facile à appréhender.
                            Nous voulons développer la meilleure expérience MNORPG de {todaysDate}.
                    </td>
                </tr>
            </table>
        </div>
    )
}
export default StoryTelling