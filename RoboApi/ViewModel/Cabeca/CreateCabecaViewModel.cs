using Flunt.Notifications;
using Flunt.Validations;

public class CreateCabecaViewModel :Notifiable<Notification>{
    public int Rotacao { get; set; }
    public int Inclinacao { get; set; }

    public Cabeca MapTo() {
        AddNotifications(new Contract<Notification>().Requires().IsNotNull(Rotacao, "Informe uma rotação válida"));
        AddNotifications(new Contract<Notification>().Requires().IsNotNull(Inclinacao, "Informe uma rotação válida"));
        return new Cabeca(Guid.NewGuid(), Rotacao, Inclinacao);
    }
}