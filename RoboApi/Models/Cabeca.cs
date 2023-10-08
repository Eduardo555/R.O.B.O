// public record Cabeca(Guid Id, int Rotacao, int Inclinacao);

public class Cabeca {

    public Cabeca(Guid Id, int Rotacao, int Inclinacao) {
        this.Id = Id;
        this.Rotacao = Rotacao;
        this.Inclinacao = Inclinacao;
    }
    public Cabeca(int Rotacao, int Inclinacao) {
        this.Rotacao = Rotacao;
        this.Inclinacao = Inclinacao;
    }

    public Guid  Id { get; set; }
    public int Rotacao { get; set; }
    public int Inclinacao { get; set; }
}