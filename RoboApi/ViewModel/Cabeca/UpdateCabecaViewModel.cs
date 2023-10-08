using Flunt.Notifications;
using Flunt.Validations;

public class UpdateCabecaViewModel: Notifiable<Notification> {
    public Guid  Id { get; set; }
    public int Rotacao { get; set; }
    public int Inclinacao { get; set; }

    public Cabeca MapTo(Cabeca? oldCabeca) {

        bool rotacaoInvalida = false;
        if (oldCabeca.Inclinacao == 3 && Rotacao != oldCabeca.Rotacao) {
            rotacaoInvalida = true;
        }

        bool posicaoInvalida = false;
        if (Math.Abs(oldCabeca.Inclinacao - Inclinacao) > 1 || Math.Abs(oldCabeca.Rotacao - Rotacao) > 1) {
            posicaoInvalida = true;
        }

        AddNotifications(new Contract<Notification>().Requires().IsFalse(rotacaoInvalida,"Não é possivel rotacionar a cabeça enquanto a sua inclinaçao estiver para baixo"));
        AddNotifications(new Contract<Notification>().Requires().IsFalse(posicaoInvalida,"Posição inválida"));
        return new Cabeca(Id, Rotacao, Inclinacao);
    }
}   