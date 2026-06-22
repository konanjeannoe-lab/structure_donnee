/*ALGORITHM somme_elements_distincts
VAR
    ens1 : ARRAY[0..3] OF INTEGER := [3, 1, 7, 9];
    ens2 : ARRAY[0..4] OF INTEGER := [2, 4, 1, 9, 3];
    n1, n2, i, j : INTEGER;
    trouve : BOOLEAN;
    somme : INTEGER;
BEGIN
    n1 := 4;
    n2 := 5;
    somme := 0;

    // 1. Parcourir ens1 : ajouter les éléments absents de ens2
    FOR i := 0 TO n1 - 1 DO
        trouve := FALSE;
        FOR j := 0 TO n2 - 1 DO
            IF ens1[i] = ens2[j] THEN
                trouve := TRUE;
            END_IF
        END_FOR
        IF trouve = FALSE THEN
            somme := somme + ens1[i];
        END_IF
    END_FOR

    // 2. Parcourir ens2 : ajouter les éléments absents de ens1
    FOR i := 0 TO n2 - 1 DO
        trouve := FALSE;
        FOR j := 0 TO n1 - 1 DO
            IF ens2[i] = ens1[j] THEN
                trouve := TRUE;
            END_IF
        END_FOR
        IF trouve = FALSE THEN
            somme := somme + ens2[i];
        END_IF
    END_FOR

    Write("Somme des éléments distincts = ", somme);
END*/