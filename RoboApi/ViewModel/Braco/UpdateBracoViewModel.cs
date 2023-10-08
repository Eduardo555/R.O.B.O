using Flunt.Notifications;
using Flunt.Validations;

public class UpdateBracoViewModel:Notifiable<Notification> {
    public Guid Id { get; set; }
    public string Lado { get; set; }
    public int Cotovelo { get; set; }
    public int Pulso { get; set; }

    public Braco MapTo(Braco? oldBraco) {

        bool pulsoInvalido = false;
        if (oldBraco.Cotovelo != 4) {
            pulsoInvalido = true;
        }
        if (oldBraco.Cotovelo != Cotovelo) {
            pulsoInvalido = false;
        }

        bool posicaoInvalida = false;
        if (Math.Abs(oldBraco.Cotovelo - Cotovelo) > 1 || Math.Abs(oldBraco.Pulso - Pulso) > 1) {
            posicaoInvalida = true;
        }

        AddNotifications(new Contract<Notification>().Requires().IsFalse(pulsoInvalido,"Não é possivel movimentar o pulso, o cotovelo precisa estar fortemente contraido"));
        AddNotifications(new Contract<Notification>().Requires().IsFalse(posicaoInvalida,"Posição inválida"));
        return new Braco(Id, Lado, Cotovelo, Pulso);
    }

}