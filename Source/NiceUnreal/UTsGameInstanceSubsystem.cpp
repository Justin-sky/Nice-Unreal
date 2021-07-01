// Fill out your copyright notice in the Description page of Project Settings.


#include "UTsGameInstanceSubsystem.h"

void UUTsGameInstanceSubsystem::Initialize(FSubsystemCollectionBase& Collection)
{
	Super::Initialize(Collection);
	GameScript = MakeShared<puerts::FJsEnv>();

	//GameScript = MakeShared<puerts::FJsEnv>(std::make_unique<puerts::DefaultJSModuleLoader>(TEXT("JavaScript")), std::make_shared<puerts::FDefaultLogger>(), 8080);
	//GameScript->WaitDebugger();
	
	TArray<TPair<FString, UObject*>> Arguments;
	Arguments.Add(TPair<FString, UObject*>(TEXT("GameInstance"), this->GetGameInstance()));
	GameScript->Start("bundle", Arguments);
}

void UUTsGameInstanceSubsystem::Deinitialize()
{
	Super::Deinitialize();
	
	GameScript.Reset();
}
