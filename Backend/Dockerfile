FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /source

COPY /Src/*.csproj aspnetapp/
RUN dotnet restore aspnetapp

COPY . aspnetapp/

WORKDIR /source/aspnetapp
RUN dotnet publish -c release -o /app --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app

RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app
USER appuser

LABEL "com.centurylinklabs.watchtower.enable"="true"

COPY --from=build /app ./
ENTRYPOINT ["dotnet", "verzel.dll"]