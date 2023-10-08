using Flunt.Notifications;
using Flunt.Validations;

public class CreateBracoViewModel : Notifiable<Notification> {
    public string Lado { get; set; }
    public int Cotovelo { get; set; }
    public int Pulso { get; set; }

    public Braco MapTo() {
        AddNotifications(new Contract<Notification>().Requires().IsNotNull(Lado, "Informe um valor para o lado"));
        AddNotifications(new Contract<Notification>().Requires().IsNotNull(Cotovelo, "Informe um valor para o cotovelo"));
        AddNotifications(new Contract<Notification>().Requires().IsNotNull(Pulso, "Informe um valor para o pulso"));
        return new Braco(Guid.NewGuid(), Lado, Cotovelo, Pulso);
    }
}