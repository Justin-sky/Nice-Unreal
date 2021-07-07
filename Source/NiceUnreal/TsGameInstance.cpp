// Fill out your copyright notice in the Description page of Project Settings.


#include "TsGameInstance.h"

#include "UI/BagUserWidget.h"

void UTsGameInstance::Init()
{
}

void UTsGameInstance::OnStart()
{
	GameScript = MakeShared<puerts::FJsEnv>();
	//GameScript = MakeShared<puerts::FJsEnv>(std::make_unique<puerts::DefaultJSModuleLoader>(TEXT("JavaScript")), std::make_shared<puerts::FDefaultLogger>(), 8080);
	//GameScript->WaitDebugger();
	
	TArray<TPair<FString, UObject*>> Arguments;
	Arguments.Add(TPair<FString, UObject*>(TEXT("GameInstance"), this));
	GameScript->Start("bundle", Arguments);


	//打开背包
	//UBagUserWidget* BagUserWidget = CreateWidget<UBagUserWidget>(this, LoadClass<UBagUserWidget>(NULL,TEXT("WidgetBlueprint'/Game/Blueprints/UI/Bag/BagWidget.BagWidget_C'")));
	//BagUserWidget->IsInViewport()?BagUserWidget->RemoveFromParent():BagUserWidget->AddToViewport();
}

void UTsGameInstance::Shutdown()
{
	GameScript.Reset();
}
