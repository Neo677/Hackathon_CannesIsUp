#include <stdio.h>

typedef struct 
{
    char name[50];
    int eco_score;
    int capacity;
} t_parcours;

void recommend_tours(t_parcours *parcours, int count)
{
    // Algorithme de recommandation ici
    char *tour_sport;
    char *tour_cinema;
    char *tour_bobo;



}

int main() 
{
    t_parcours parcours_list[10];
    // ... remplissage des données
    recommend_tours(parcours_list, 10);
    return 0;
} 