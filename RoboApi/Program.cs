using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "MyPolicy",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173").AllowAnyHeader().AllowAnyMethod();
        });
});

// Adiciona e gerencia contexto do banco.
builder.Services.AddDbContext<AppDbContext>();
var app = builder.Build();
app.UseCors("MyPolicy");    

// Rotas
// Braco
app.MapGet("api/braco/{id}", (Guid Id, AppDbContext context) => {
    var _braco = context.Braco.Find(Id);
    return Results.Ok(_braco);
});

app.MapPost("api/braco", (AppDbContext context, CreateBracoViewModel model) => {
    var braco = model.MapTo();
    
    if(!model.IsValid)
        return Results.BadRequest(model.Notifications);

    context.Braco.Add(braco);
    context.SaveChanges();
    return Results.Created($"api/cabeca/{braco.Id}", braco);
});

app.MapPut("api/braco/{id}", (Guid id, AppDbContext context, UpdateBracoViewModel model) => {
    var _braco = context.Braco.Find(id);
    context.Entry(_braco).State = EntityState.Detached;

    var braco = model.MapTo(_braco);
    if (!model.IsValid)
        return Results.BadRequest(model.Notifications);

    context.Update(braco);
    context.SaveChanges();
    return Results.Ok(braco);
});

// Cabeca
app.MapGet("api/cabeca/{id}", (Guid Id, AppDbContext context) => {
    var _cabeca = context.Cabeca.Find(Id);
    return Results.Ok(_cabeca);
});

app.MapPost("api/cabeca", (AppDbContext context, CreateCabecaViewModel model) => {
    var cabeca = model.MapTo();
    
    if(!model.IsValid)
        return Results.BadRequest(model.Notifications);

    context.Cabeca.Add(cabeca);
    context.SaveChanges();
    return Results.Created($"api/cabeca/{cabeca.Id}", cabeca);
});

app.MapPut("api/cabeca/{id}", (Guid id, AppDbContext context, UpdateCabecaViewModel model) => {
    var _cabeca = context.Cabeca.Find(id);
    context.Entry(_cabeca).State = EntityState.Detached;

    var cabeca = model.MapTo(_cabeca);
    if (!model.IsValid)
        return Results.BadRequest(model.Notifications);

    context.Update(cabeca);
    context.SaveChanges();
    return Results.Ok(cabeca);
});

// Restart
app.MapDelete("api/restart", (AppDbContext context) => {
    context.Cabeca.ApagarTudo();
    context.Braco.ApagarTudo();
    context.SaveChanges();
    return Results.Ok();
});

app.Run();
